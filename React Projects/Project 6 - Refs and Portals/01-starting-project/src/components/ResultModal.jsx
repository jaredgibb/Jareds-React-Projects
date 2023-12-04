import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom'                   
//when wrapped
const ResultModal = forwardRef(function ResultModal(
  {  targetTime, timeRemaining, onReset },
  ref
) {
  
  const userLost = timeRemaining <= 0;
  const userScored = ((1 - timeRemaining / (targetTime * 1000)) * 100).toFixed();
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className='result-modal'
      onClose={onReset}
    >
      <h2>{userLost && 'You Lost'}{!userLost && 'You Scored ' + userScored + '%' }</h2>
      <p>
        The Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{(timeRemaining / 1000).toFixed(2)} Seconds Long</strong>{' '}
      </p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
