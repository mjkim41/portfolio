const isDev = import.meta.env.VITE_MODE === 'development';


export const logger = {
    // logger.log(...args) : dev 모드 일 시 console.log(...args)
    log: (...args) => {
        if (isDev) {
            console.log(...args);
        }
    },
    error: (...args) => {
        if (isDev) {
            console.error(...args);
        }
    },
    warn: (...args) => {
        if (isDev) {
            console.warn(...args);
        }
    }
};