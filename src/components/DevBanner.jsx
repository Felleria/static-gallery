
import React from 'react';

const DevBanner = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffd700',
      color: '#000',
      textAlign: 'center',
      padding: '10px',
      zIndex: 9999,
      fontWeight: 'bold',
    }}>
      🚧 Under Development - Iam  working hard to bring you something amazing! check soon!
    </div>
  );
};

export default DevBanner;