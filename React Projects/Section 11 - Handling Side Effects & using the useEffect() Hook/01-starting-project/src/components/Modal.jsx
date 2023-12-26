import {  useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ open, children, onClose }) {
  const dialog = useRef();



  //we use useEffect to open the modal when the open prop is true
  //and close it when the open prop is false
  //effects run after every render, not during or before
  //the ref doesnt havea  value on load when this code is executed so it muust occur after the first render
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  
  }, [open])
  //we use the open prop as a dependency to the useEffect hook
  //this means that the effect will run every time the open prop changes
  //if we didnt do this, the effect would only run once when the component is mounted
  //and the modal wouldnt open or close when the open prop changes


  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
     {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
