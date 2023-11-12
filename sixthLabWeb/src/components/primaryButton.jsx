import React from 'react';

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      style={{background: 'transparent', borderRadius: '20px', color: 'black', width: '180px',
      height: '30px', fontSize: '15px', cursor: 'pointer', backgroundColor: 'white'}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;