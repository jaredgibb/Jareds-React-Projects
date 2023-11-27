import { forwardRef, useImperativeHandle, useRef } from 'react';
//when wrapped
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog
      ref={dialog}
      className='result-modal'>
      <h2>You {result}</h2>
      <p>
        The Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>X Seconds Long</strong>{' '}
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;