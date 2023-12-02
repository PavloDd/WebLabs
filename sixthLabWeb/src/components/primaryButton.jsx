import React from 'react';
import { useNavigate } from 'react-router-dom';


const PrimaryButton = ({item, children }) => {
  const navigate = useNavigate();
  console.log(item);
  const id = {item}
  
  const handleClick = () => {
    navigate('item/:item.id}')
  }  
  return (
    <button
      style={{background: 'transparent', borderRadius: '20px', color: 'black', width: '180px',
      height: '30px', fontSize: '15px', cursor: 'pointer', backgroundColor: 'white'}}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;