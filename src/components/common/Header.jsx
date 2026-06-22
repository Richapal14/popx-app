import React from 'react';
import '../../App.css';

const styles = {
header: {
    height: '60px',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
},
title: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--text-dark)',
}
};

const Header = ({ title }) => {
return (
    <div style={styles.header}>
    <div style={styles.title}>{title}</div>
    </div>
);
};

export default Header;