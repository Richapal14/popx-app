import React from 'react';
import '../../App.css';

const Button = ({ children, variant = 'primary', onClick, ...props }) => {
const baseStyle = {
    padding: '16px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.2s',
};

const variants = {
    primary: {
    backgroundColor: 'var(--primary-purple)',
    color: 'white',
    },
    secondary: {
    backgroundColor: 'var(--secondary-purple)',
    color: 'var(--text-dark)',
    }
};

const style = { ...baseStyle, ...variants[variant] };

return (
    <button style={style} onClick={onClick} {...props}>
    {children}
    </button>
);
};

export default Button;