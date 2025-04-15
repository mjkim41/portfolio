import React, {useRef, useState} from 'react';
import styles from './contact.module.scss';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import {logger} from "../../../utils/logger.js";
import * as yup from 'yup';
import { debounce } from 'lodash';
import CircularSpinner from '../../commonUI/CircularSpinner';
import MiniAlert from '../../commonUI/MiniAlert';
import ContactSvg from "./ContactSvg.jsx";

const Contact = () => {
    // 메일 보내기 진행 중인지 여부
    const [isLoading, setIsLoading] = useState(false);
    // yup 유효성 검사 실패 메시지
    const [formErrors, setFormErrors] = useState({});
    // 메일 전송 성공여부 보여주는 모달
    const [alert, setAlert] = useState(null);
    const form = useRef(null);
    const { t } = useTranslation();

    // Yup 스키마 정의
    const schema = yup.object().shape({
        name: yup.string()
            .trim()
            .required('이름을 입력해주세요'),
        email: yup.string()
            .trim()
            .email('올바른 이메일 형식이 아닙니다')
            .required('이메일을 입력해주세요'),
        message: yup.string()
            .trim()
            .required('메시지를 입력해주세요')
    });

    // debounce된 validateField 함수 생성
    const debouncedValidateField = debounce(async (name, value) => {
        try {
            await schema.validateAt(name, { [name]: value });
            setFormErrors(prev => ({ ...prev, [name]: undefined }));
        } catch (err) {
            setFormErrors(prev => ({ ...prev, [name]: err.message }));
        }
    }, 700); // 700ms 딜레이

    const handleChange = (e) => {
        const { name, value } = e.target;
        debouncedValidateField(name, value);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true); // 제출 시작시 로딩 상태 활성화

        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        try {
            // Yup으로 유효성 검사
            await schema.validate(formValues, { abortEarly: false });
            setFormErrors({});

            // EmailJS로 메일 전송
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                {publicKey: import.meta.env.VITE_PUBLIC_KEY}
            );

            logger.log('이메일 전송 성공');
            // 성공여부 모달 설정
            setAlert({
                type: 'success',
                message: t('pages.main.contact.status.success')
            });
            e.target.reset();

        } catch (err) {
            if (err.name === 'ValidationError') {
                // Yup 유효성 검사 에러 처리
                const errors = {};
                err.inner.forEach(error => {
                    errors[error.path] = error.message;
                });
                setFormErrors(errors);
            } else {
                // EmailJS 에러 처리
                logger.error('이메일 전송 실패:', err);
                setAlert({
                    type: 'error',
                    message: t('pages.main.contact.status.error')
                });
            }
        } finally {
            setIsLoading(false); // 성공/실패 상관없이 로딩 상태 비활성화
        }
    };

    return (
        <div className={styles.contact}>
            <div className={styles.contactSection}>
                <form ref={form} onSubmit={sendEmail}>
                    {/* 타이틀 */}
                    <h1 className={styles.contactTitle}>{t('pages.main.contact.title')}</h1>
                    {/* 이름 */}
                    <div className={styles.formItem}>
                        <label>{t('pages.main.contact.form.name.label')}</label>
                        <input
                            name="name"
                            type="text" 
                            placeholder={t('pages.main.contact.form.name.placeholder')}
                            onChange={handleChange}
                        />
                        {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
                    </div>
                    {/* 이메일 */}
                    <div className={styles.formItem}>
                        <label>{t('pages.main.contact.form.email.label')}</label>
                        <input
                            name='email'
                            type='text'
                            placeholder={t('pages.main.contact.form.email.placeholder')}
                            onChange={handleChange}
                        />
                        {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
                    </div>
                    {/* 메시지 */}
                    <div className={styles.formItem}>
                        <label>{t('pages.main.contact.form.message.label')}</label>
                        <textarea
                            name="message"
                            rows={10} 
                            placeholder={t('pages.main.contact.form.message.placeholder')}
                            onChange={handleChange}
                            className={formErrors.message ? styles.errorInput : ''}
                        />
                        {formErrors.message && <span className={styles.errorText}>{formErrors.message}</span>}
                    </div>
                    {/* 보내기 버튼 */}
                    <button
                        className={styles.formButton}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <CircularSpinner size="small" />
                        ) : (
                            t('pages.main.contact.form.submit')
                        )}
                    </button>
                </form>
            </div>

            {alert && (
                <MiniAlert
                    type={alert.type}
                    message={alert.message}
                    isNegative={alert.type === 'error'}
                    onClose={() => setAlert(null)}
                />
            )}

            <div className={styles.contactSection}>
                <ContactSvg/>
            </div>
        </div>
    );
};

export default Contact;