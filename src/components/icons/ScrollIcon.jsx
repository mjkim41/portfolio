import React from 'react';

const ScrollIcon = ({ width = 50, height = 50, fill = "none" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
            />
            <path
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ScrollIcon;