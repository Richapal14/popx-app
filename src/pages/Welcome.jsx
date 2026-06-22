import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      

      <div style={styles.logoSection}>
        <h1 style={styles.logoText}>PopX</h1>
      </div>

      <div style={styles.actionSection}>
        <h1 style={styles.heading}>Welcome to PopX</h1>
        <p style={styles.subtitle}>Start your journey with PopX</p>
        
        <button style={styles.createBtn} onClick={() => navigate('/signup')}>
          Create Account
        </button>
        
        <button style={styles.loginBtn} onClick={() => navigate('/signin')}>
          Already Registered? Login
        </button>
      </div>

    </div>
  );
};

const styles = {
  container: {
    width: '375px',
    height: '100vh',
    minHeight: '812px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px 20px 30px 20px', 
    boxSizing: 'border-box',
    backgroundColor: '#F7F8F9',
  },
  logoSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
  },
  logoText: {
    fontSize: '48px',
    color: '#6c5ce7', 
    fontWeight: 'bold',
    margin: 0,
    letterSpacing: '-1px',
  },
  actionSection: {
    width: '100%',
  },
  heading: {
    fontSize: '28px',
    margin: '0 0 10px 0',
    color: '#333',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 30px 0',
  },
  createBtn: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#6c5ce7',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  loginBtn: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#e0d4fc', 
    color: '#333',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default Welcome;