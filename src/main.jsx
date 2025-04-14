import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.jsx'
// i18n 설정 파일 불러오기
import './multiLanguage/i18n'

createRoot(document.getElementById('root')).render(
    <App />
)
