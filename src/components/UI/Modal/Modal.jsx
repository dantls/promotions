import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css'

const portalRoot = document.getElementById('portal-root')

export default function UIModal({children, isOpen, onClickClose}){
  if(!isOpen){
    return null;
  }
  return ReactDOM.createPortal(
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <button 
          type="button"
          onClick={onClickClose} 
          className="ui-modal__close-button"
        >
          X
        </button>
        {children}
      </div>
    </div>, portalRoot
  );
}