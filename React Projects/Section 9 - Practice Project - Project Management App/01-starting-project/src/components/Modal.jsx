import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ task = {} }, ref) {
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.style.display = 'flex';
  };
  const closeModal = () => {
    modalRef.current.style.display = 'none';
  };
  useImperativeHandle(ref, () => {
    return {
      openModal: openModal,
      closeModal: closeModal,
    };
  });

  function divClick(e) {
    e.stopPropagation();
    closeModal();
  }
  return createPortal(
    <dialog
      style={{ display: 'none' }}
      className=' h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 '
      ref={modalRef}
      onClick={divClick}
    >
      <div className='bg-white p-3 rounded shadow-md min-w-[30%] max-w-[45%]' onClick={(e)=>e.stopPropagation()}>
        <p className='text-center text-3xl mb-4'>{ task.task}</p>
        <p> This task is { task.completed? 'complete' : 'not done yet'}</p>
      </div>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
