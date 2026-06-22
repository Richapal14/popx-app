import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/common/Header';
import ProfileHeader from '../components/common/ProfileHeader';

const AccountSettings = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: '', email: '', phone: '', company: '', agency: '', avatar: 'https://i.pravatar.cc/150?img=47' });
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedUserString = localStorage.getItem('popx_user');
    if (savedUserString) {
      setUserData(JSON.parse(savedUserString));
    } else {
      navigate('/'); 
    }
  }, [navigate]);

  const handleLogout = () => navigate('/');

  const saveNewAvatar = (newAvatarUrl) => {
    const updatedUser = { ...userData, avatar: newAvatarUrl };
    setUserData(updatedUser);
    localStorage.setItem('popx_user', JSON.stringify(updatedUser)); 
    setIsMenuOpen(false); 
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => saveNewAvatar(reader.result); 
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.container}>
      <Header title="Account Settings" />
      
      <div style={styles.content}>
        <ProfileHeader 
          name={userData.name} 
          email={userData.email} 
          avatar={userData.avatar} 
          onCameraClick={() => setIsMenuOpen(true)} 
        />
        
        <div style={styles.detailsBox}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>Account Details</h3>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Phone:</span>
            <span style={styles.detailValue}>{userData.phone || 'Not provided'}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Company:</span>
            <span style={styles.detailValue}>{userData.company || 'Not provided'}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Agency:</span>
            <span style={styles.detailValue}>{userData.agency === 'yes' ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>

      <div style={styles.bottomButtonContainer}>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {isMenuOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsMenuOpen(false)}>
          {/* Prevent clicks inside the menu from closing the overlay */}
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>Change Profile Photo</h3>
              <span style={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>✕</span>
            </div>
            
            <div style={styles.presetContainer}>
              <img src="https://i.pravatar.cc/150?img=11" alt="preset" style={styles.presetImg} onClick={() => saveNewAvatar('https://i.pravatar.cc/150?img=11')} />
              <img src="https://i.pravatar.cc/150?img=32" alt="preset" style={styles.presetImg} onClick={() => saveNewAvatar('https://i.pravatar.cc/150?img=32')} />
              <img src="https://i.pravatar.cc/150?img=68" alt="preset" style={styles.presetImg} onClick={() => saveNewAvatar('https://i.pravatar.cc/150?img=68')} />
              
              <div style={styles.uploadBtn} onClick={() => fileInputRef.current.click()}>+ Upload</div>
              <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileUpload} />
            </div>
          </div>
        </div>
      )}

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
    boxSizing: 'border-box',
    backgroundColor: '#F7F8F9',
    position: 'relative',
  },
  content: {
    padding: '20px',
    flex: 1,
    overflowY: 'auto',
  },
  detailsBox: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #eaeaea',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '14px',
  },
  detailLabel: {
    color: '#666',
    fontWeight: '500',
  },
  detailValue: {
    color: '#333',
    fontWeight: 'bold',
  },
  bottomButtonContainer: {
    padding: '20px', 
    marginTop: 'auto',
  },
  logoutBtn: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#cbcbcb', 
    color: '#333',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  
  modalOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'flex-end',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    padding: '25px 20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    boxShadow: '0 -4px 15px rgba(0,0,0,0.1)',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  closeBtn: {
    fontSize: '20px',
    color: '#888',
    cursor: 'pointer',
    padding: '5px',
  },
  presetContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  presetImg: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    cursor: 'pointer',
    border: '2px solid transparent',
  },
  uploadBtn: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#6c5ce7',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textAlign: 'center',
  }
};

export default AccountSettings;