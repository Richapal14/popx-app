import React from 'react';

const LabeledInput = ({ label, type, required, placeholder, value, onChange, onBlur, showError, errorMessage }) => {
  return (
    <div style={styles.container}>
      <div style={styles.inputWrapper}>
        <label style={styles.label}>
          {label}{required && <span style={styles.asterisk}>*</span>}
        </label>
        
        <input 
          type={type} 
          required={required} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          style={{
            ...styles.input,
            borderColor: showError ? '#ff4757' : '#cbcbcb'
          }}
        />
      </div>
      
      {showError && (
        <div style={styles.errorText}>
          ⚠️ {errorMessage || "This field is required"}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '24px', 
  },
  inputWrapper: {
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: '-9px',
    left: '12px',
    backgroundColor: '#F7F8F9',
    padding: '0 6px',
    fontSize: '13px',
    color: '#6c5ce7',
  },
  asterisk: {
    color: '#ff4757',
  },
  input: {
    width: '100%',
    padding: '14px 15px', 
    borderRadius: '6px',
    border: '1px solid #cbcbcb',
    boxSizing: 'border-box',
    fontSize: '14px', 
    outline: 'none',
    backgroundColor: 'transparent',
    color: '#333',
  },
  errorText: {
    color: '#ff4757',
    fontSize: '12px',
    marginTop: '6px',
  }
};

export default LabeledInput;