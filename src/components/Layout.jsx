import React from 'react';
import '../App.css';

const Layout = ({ children }) => {
return (
    <div className="mobile-container">
    <div className="screen-content">
        {children}
    </div>
    </div>
);
};

export default Layout;