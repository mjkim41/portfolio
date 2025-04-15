// techStack을 badge로 만들어 주는 함수
export const techStackBadgeMap = {
    'HTML5': 'https://img.shields.io/badge/HTML5-2f213f?style=flat&logo=html5&logoColor=white',
    'CSS3': 'https://img.shields.io/badge/CSS3-2f213f?style=flat&logo=css3&logoColor=white',
    'JS': 'https://img.shields.io/badge/JavaScript-2f213f?style=flat&logo=javascript&logoColor=white',
    'JavaScript': 'https://img.shields.io/badge/JavaScript-2f213f?style=flat&logo=javascript&logoColor=white',
    'React': 'https://img.shields.io/badge/React-2f213f?style=flat&logo=react&logoColor=white',
    'Spring': 'https://img.shields.io/badge/Spring-2f213f?style=flat&logo=spring&logoColor=white',
    'MariaDB': 'https://img.shields.io/badge/MariaDB-2f213f?style=flat&logo=mariadb&logoColor=white',
    'Three.js': 'https://img.shields.io/badge/Three.js-2f213f?style=flat&logo=three.js&logoColor=white',
    'Framer Motion': 'https://img.shields.io/badge/Motion-2f213f?style=flat&logo=framer&logoColor=white',
    'EC2': 'https://img.shields.io/badge/EC2-2f213f?style=flat&logo=amazonec2&logoColor=white',
    'Spring Data JPA': 'https://img.shields.io/badge/Spring_Data_JPA-2f213f?style=flat&logo=spring&logoColor=white',
    'MyBatis': 'https://img.shields.io/badge/MyBatis-2f213f?style=flat'
};

export const getTechStackBadges = (techStackString) => {
    return techStackString.split(',')
        .map(tech => {
         const trimmedTech = tech.trim();
            // 정확한 매칭을 위해 전체 문자열 비교
            if (techStackBadgeMap[trimmedTech]) {
                return techStackBadgeMap[trimmedTech];
            }
            // 부분 매칭이 필요한 경우
            const key = Object.keys(techStackBadgeMap)
                .find(k => trimmedTech.includes(k));
            return key ? techStackBadgeMap[key] : null;
        })
        .filter(Boolean);
};