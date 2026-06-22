import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import LabeledInput from '../components/common/LabeledInput';

const CreateAccount = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [agency, setAgency] = useState('yes');

  const [touched, setTouched] = useState({ name: false, phone: false, email: false, password: false });

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const isNameValid = name.trim() !== '';

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
  const isPhoneValid = /^\d{10}$/.test(phone);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/.test(password);

  const isFormValid = isNameValid && isPhoneValid && isEmailValid && isPasswordValid;

  const handleCreateAccount = () => {
    if (!isFormValid) return;
    
    const userData = { name, email, password, phone, company, agency };
    localStorage.setItem('popx_user', JSON.stringify(userData));
    navigate('/settings');
  };

  return (
    <div style={styles.container}>
      <BackButton />
      <h1 style={styles.heading}>Create your PopX<br/>account</h1>
      
      <div style={styles.formScrollArea}>
        <LabeledInput 
          label="Full Name" type="text" required placeholder="Enter your name" 
          value={name} onChange={(e) => setName(e.target.value)} 
          onBlur={() => handleBlur('name')}
          showError={touched.name && !isNameValid}
          errorMessage="Name is required"
        />
        
        <LabeledInput 
          label="Phone number" type="tel" required placeholder="Enter your Number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} 
          onBlur={() => handleBlur('phone')}
          showError={touched.phone && !isPhoneValid}
          errorMessage="Must be exactly 10 digits"
        />
        
        <LabeledInput 
          label="Email address" type="email" required placeholder="Enter your email" 
          value={email} onChange={(e) => setEmail(e.target.value)} 
          onBlur={() => handleBlur('email')}
          showError={touched.email && !isEmailValid}
          errorMessage="Enter a valid email address"
        />
        
        <LabeledInput 
          label="Password" type="password" required placeholder="Enter your password" 
          value={password} onChange={(e) => setPassword(e.target.value)} 
          onBlur={() => handleBlur('password')}
          showError={touched.password && !isPasswordValid}
          errorMessage="Min 6 chars, 1 uppercase, 1 number, 1 symbol"
        />
        
        <LabeledInput 
          label="Company name" type="text" placeholder="Enter Comany Name" 
          value={company} onChange={(e) => setCompany(e.target.value)} 
        />

        <div style={styles.agencyLabel}>Are you an Agency?<span style={styles.requiredAsterisk}>*</span></div>
        <div style={styles.radioGroup}>
          <div style={styles.radioOption}>
            <input type="radio" id="yes" name="agency" value="yes" checked={agency === 'yes'} onChange={(e) => setAgency(e.target.value)} style={styles.radioInput} />
            <label htmlFor="yes">Yes</label>
          </div>
          <div style={styles.radioOption}>
            <input type="radio" id="no" name="agency" value="no" checked={agency === 'no'} onChange={(e) => setAgency(e.target.value)} style={styles.radioInput} />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>

      <div style={styles.bottomButtonContainer}>
        <button 
          style={isFormValid ? styles.submitBtnEnabled : styles.submitBtnDisabled} 
          disabled={!isFormValid}
          onClick={handleCreateAccount}
        >
          Create Account
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
    margin: '20px 0 30px 0',
    color: '#333',
  },
  formScrollArea: {
    flex: 1, 
    overflowY: 'auto', 
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  agencyLabel: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '10px',
  },
  requiredAsterisk: {
    color: 'red',
    marginLeft: '4px',
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  radioInput: {
    accentColor: '#6c5ce7', 
    width: '18px',
    height: '18px',
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

export default CreateAccount;