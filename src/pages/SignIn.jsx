import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import LabeledInput from '../components/common/LabeledInput';

const SignIn = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [touched, setTouched] = useState({ email: false, password: false });
  
  const [loginError, setLoginError] = useState('');

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 

  const isPasswordValid = password.trim() !== ''; 


  const isFormValid = isEmailValid && isPasswordValid;

  const handleLogin = () => {

    setLoginError(''); 

    if (!isFormValid) return;

    const savedUserString = localStorage.getItem('popx_user');

    if (!savedUserString) {
      setLoginError("No account found! Please create an account first.");
      return;
    }

    const savedUser = JSON.parse(savedUserString);

    if (email === savedUser.email && password === savedUser.password) {
      navigate('/settings'); 
    } else {
      setLoginError("Incorrect email or password. Please try again."); 
    }
  };

  return (
    <div style={styles.container}>
      <BackButton />
      
      <h1 style={styles.heading}>Signin to your PopX<br/>account</h1>

      <p style={styles.subtitle}>
        Already created account, SignIn to check the status of your account
      </p>

      <div style={styles.formArea}>
        <LabeledInput 
          label="Email address" type="email" placeholder="Enter email address" 
          value={email} 
          onChange={(e) => {
            setEmail(e.target.value);
            setLoginError('');
          }} 
          onBlur={() => handleBlur('email')}
          showError={touched.email && !isEmailValid}
          errorMessage="Enter a valid email address"
        />
        
        <LabeledInput 
          label="Password" type="password" placeholder="Enter password" 
          value={password} 
          onChange={(e) => {
            setPassword(e.target.value);
            setLoginError('');
          }} 
          onBlur={() => handleBlur('password')}
          showError={touched.password && !isPasswordValid}
          errorMessage="Password is required"
        />

        {loginError && (
          <div style={styles.loginErrorBox}>
            ⚠️ {loginError}
          </div>
        )}
      </div>

      <div style={styles.bottomButtonContainer}>
        <button 
          style={isFormValid ? styles.submitBtnEnabled : styles.submitBtnDisabled} 
          disabled={!isFormValid}
          onClick={handleLogin}
        >
          Login
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
    padding: '30px 20px 20px 20px', 
    boxSizing: 'border-box',
    backgroundColor: '#F7F8F9',
  },
  heading: {
    fontSize: '28px',
    margin: '20px 0 15px 0',
    color: '#333',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 30px 0',
    lineHeight: '1.5',
    paddingRight: '10px',
  },
  formArea: {
    flex: 1, 
    paddingTop: '10px',
  },
  loginErrorBox: {
    marginTop: '10px',
    padding: '12px',
    backgroundColor: '#ffeaa7',
    border: '1px solid #ff4757',
    borderRadius: '6px',
    color: '#ff4757',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
  },
  bottomButtonContainer: {
    marginTop: 'auto', 
  },
  submitBtnEnabled: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#6c5ce7', 
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer', 
  },
  submitBtnDisabled: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#cbcbcb', 
    color: '#888',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'not-allowed', 
  }
};

export default SignIn;