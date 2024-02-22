import React from 'react';
import './App.css';

function Modal({ children }) {
  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        {children}
      </div>
    </div>
  );
}

export default Modal;
