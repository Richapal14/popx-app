import React from 'react';

const ProfileHeader = ({ name, email, avatar, onCameraClick }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={avatar || "https://i.pravatar.cc/150?img=47"} alt={name} style={styles.image} />

        <div style={styles.cameraIcon} onClick={onCameraClick}>
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66667 1.33333L3.83333 3.33333H1.33333C0.596953 3.33333 0 3.93028 0 4.66667V10C0 10.7364 0.596953 11.3333 1.33333 11.3333H12.6667C13.403 11.3333 14 10.7364 14 10V4.66667C14 3.93028 13.403 3.33333 12.6667 3.33333H10.1667L9.33333 1.33333H4.66667ZM7 9.33333C5.52724 9.33333 4.33333 8.13942 4.33333 6.66667C4.33333 5.19391 5.52724 4 7 4C8.47276 4 9.66667 5.19391 9.66667 6.66667C9.66667 8.13942 8.47276 9.33333 7 9.33333ZM7 5.33333C6.26362 5.33333 5.66667 5.93028 5.66667 6.66667C5.66667 7.40305 6.26362 8 7 8C7.73638 8 8.33333 7.40305 8.33333 6.66667C8.33333 5.93028 7.73638 5.33333 7 5.33333Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div style={styles.info}>
        <div style={styles.name}>{name}</div>
        <div style={styles.email}>{email}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '30px 0 20px 0',
  },
  imageContainer: {
    position: 'relative',
    width: '76px',
    height: '76px',
    borderRadius: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    backgroundColor: '#6c5ce7',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid white',
    cursor: 'pointer',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: '14px',
    color: '#6c5ce7',
  }
};

export default ProfileHeader;