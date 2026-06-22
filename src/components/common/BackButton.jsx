import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
const navigate = useNavigate();

return (
    <button 
    onClick={() => navigate(-1)} 
    style={{
        background: 'none',
        border: 'none',
        fontSize: '24px',
        color: 'var(--text-dark)',
        cursor: 'pointer',
        padding: '0 0 20px 0',
        alignSelf: 'flex-start',
        display: 'flex',
        alignItems: 'center'
    }}
    >
      
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    </button>
);
};

export default BackButton;