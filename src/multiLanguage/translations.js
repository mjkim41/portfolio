export const resources = {
  kor: {
    translation: {
      // 페이지 공통
      common: {
        lang: {
          ko: '한국어',
          en: 'ENG',
          es: 'ESP'
        }
      },
      pages: {
        main: {
          hero: {
            greeting: '안녕하세요,',
            name: '김미정입니다',
            profileTitle: '저에 대해 더 궁금하신가요?',
            profileDesc: '깃허브와 블로그를 확인해보세요',
            resumeBtn: '이력서',
            portfolioBtn: '포트폴리오',
            speech: {
              line1: '협업을 위해 문서화를 중시하는 신입 개발자입니다.'
            }
          },
          techStack: {
          },
          portfolio: {
            items: {
              item1: {
                title: '1:1 재능 교환 플랫폼',
                desc: '• 사용자 간 Web RTC를 통해 재능을 교환하는 플랫폼입니다.\n• Redux를 통한 전역 상태 관리, 게시글 및 매칭 관리 프론트엔드, 공통 UI 컴포넌트 작성을 담당하였습니다.\n• 자세한 내용은 아래 링크 혹은 홈페이지 상단의 포트폴리오에서 확인하실 수 있습니다.',
                techStack: 'JS, HTML5, CSS3, React, Spring, Spring Data JPA, Maria DB, EC2'
              },
              item2: {
                title: '포트폴리오 웹사이트',
                desc: '• 저의 포트폴리오 웹사이트입니다.\n• React 기반의 반응형 웹사이트로, Three.js와 Motion을 사용해 3D 애니메이션을 구현했습니다.\n• 자세한 내용은 아래 링크 혹은 홈페이지 상단의 포트폴리오에서 확인하실 수 있습니다.',
                techStack: 'JS, HTML5, CSS3, React, Three.js, Framer Motion'
              },
              item3: {
                title: '인테리어 공유 플랫폼',
                desc: '• 본인의 집 인테리어를 공유할 수 있는 사이트입니다.\n• JWT 기반 로그인/회원가입 기능(풀스택)을 맡아 사용자 인증과 UX 향상에 집중했습니다.\n• 자세한 내용은 아래 링크 혹은 홈페이지 상단의 포트폴리오에서 확인하실 수 있습니다.',
                techStack: 'JS, HTML5, CSS3, Java17, Spring, MyBatis, MariaDB'
              }
            }
          },
          contact: {
            title: '연락하기',
            form: {
              name: {
                label: '이름',
                placeholder: '이름을 입력해주세요'
              },
              email: {
                label: '이메일',
                placeholder: '이메일을 입력해주세요'
              },
              message: {
                label: '메시지',
                placeholder: '메시지를 입력해주세요'
              },
              submit: '보내기'
            },
            status: {
              success: '메시지 전송 완료!',
              error: '앗, 전송 실패!'
            }
          }
        }
      },
      validation: {
        name: {
          required: '이름을 입력해주세요'
        },
        email: {
          required: '이메일을 입력해주세요',
          invalid: '올바른 이메일 형식이 아닙니다'
        },
        message: {
          required: '메시지를 입력해주세요'
        }
      }
    }
  },
  eng: {
    translation: {
      common: {
        lang: {
          ko: '한국어',
          en: 'ENG',
          es: 'ESP'
        }
      },
      pages: {
        main: {
          hero: {
            greeting: 'Hey There,',
            name: `I'm Mijung!`,
            profileTitle: 'Want to know more?',
            profileDesc: 'Check out my GitHub and blog',
            resumeBtn: 'View Resume',
            speech: {
              line1: 'I believe in well-documented collaboration'
            }
          },
          techStack: {
          },
          portfolio: {
            items: {
              item1: {
                title: '1:1 Skill Sharing Platform',
                desc: '• A platform where users can exchange talents through Web RTC.\n• I was responsible for global state management using Redux, frontend development for post and matching management, and creating common UI components.\n• Check out the details on GitHub below (Korean only).',
                techStack: 'JS, HTML5, CSS3, React, Spring, Spring Data JPA, Maria DB, EC2'
              },
              item2: {
                title: 'Portfolio Website',
                desc: '• My portfolio website featuring 3D animations.\n• Implemented with Three.js and Framer Motion on a responsive React-based platform.\n• Check out the details on GitHub below.',
                techStack: 'JS, HTML5, CSS3, React, Three.js, Framer Motion'
              },
              item3: {
                title: 'Interior Sharing Platform',
                desc: '• A website where users can share their home interior designs.\n• I handled the full-stack development of JWT-based login/registration features, focusing on user authentication and UX improvement.\n• Check out the details on GitHub below. (Korean only).',
                techStack: 'JS, HTML5, CSS3, Java17, Spring, MyBatis, MariaDB'
              }
            }
          },
          contact: {
            title: 'Get in Touch',
            form: {
              name: {
                label: 'Name',
                placeholder: 'Enter your name'
              },
              email: {
                label: 'Email',
                placeholder: 'Enter your email'
              },
              message: {
                label: 'Message',
                placeholder: 'Enter your message'
              },
              submit: 'Send'
            },
            status: {
              success: 'Message sent!',
              error: 'Failed to send'
            }
          }
        }
      },
      validation: {
        name: {
          required: 'Please enter your name'
        },
        email: {
          required: 'Please enter your email',
          invalid: 'Please enter a valid email'
        },
        message: {
          required: 'Please enter your message'
        }
      }
    }
  },
  esp: {
    translation: {
      common: {
        lang: {
          ko: '한국어',
          en: 'ENG',
          es: 'ESP'
        }
      },
      pages: {
        main: {
          hero: {
            greeting: 'Hola,',
            name: 'Me llamo Mijung',
            profileTitle: '¿Quieres saber más?',
            profileDesc: 'Explora mi GitHub y blog',
            resumeBtn: 'Ver CV',
            speech: {
              line1: 'Priorizando la documentación en el trabajo en equipo'
            }
          },
          techStack: {
          },
          portfolio: {
            items: {
              item1: {
                title: 'Plataforma de Intercambio de Talentos', // 재능 교환 플랫폼
                desc: '- Plataforma de intercambio de habilidades en tiempo real usando Web RTC.\n- Desarrollé la gestión de estados con Redux y componentes UI para el sistema de publicaciones y emparejamiento.\n• Haz clic en el enlace de abajo para más información (disponible solo en coreano).',
                techStack: 'JS, HTML5, CSS3, React, Spring, Spring Data JPA, Maria DB, EC2'
              },
              item2: {
                title: 'Sitio Web de Portafolio',
                desc: '• Mi sitio web de portafolio con animaciones 3D.\n• Implementado con Three.js y Framer Motion en una plataforma React responsive.\n• Haz clic en el enlace de abajo para explorar más detalles.',
                techStack: 'JS, HTML5, CSS3, React, Three.js, Framer Motion'
              },
              item3: {
                title: 'Plataforma de Fotos de Interior', // 인테리어 사진 공유 플랫폼
                desc: '• Un sitio web donde los usuarios pueden compartir sus diseños interiores de sus casas.\n• Me encargué del desarrollo full-stack de las funciones de inicio de sesión/registro basadas en JWT, centrándome en la autenticación de usuarios y la mejora de UX.\n• Haz clic en el enlace de abajo para más información (disponible solo en coreano).',
                techStack: 'JS, HTML5, CSS3, Java17, Spring, MyBatis, MariaDB'
              }
            }
          },
          contact: {
            title: 'Contáctame',
            form: {
              name: {
                label: 'Nombre',
                placeholder: 'Tu nombre'
              },
              email: {
                label: 'Correo electrónico',
                placeholder: 'Tu correo electrónico'
              },
              message: {
                label: 'Mensaje',
                placeholder: 'Escribe tu mensaje aquí'
              },
              submit: 'Enviar'
            },
            status: {
              success: 'Mensaje enviado!',
              error: 'Error al enviar'
            }
          }
        }
      },
      validation: {
        name: {
          required: 'Escribe tu nombre'
        },
        email: {
          required: 'Escribe tu correo electrónico',
          invalid: 'El formato del correo no es válido'
        },
        message: {
          required: 'Escribe tu mensaje'
        }
      }
    }
  }
};