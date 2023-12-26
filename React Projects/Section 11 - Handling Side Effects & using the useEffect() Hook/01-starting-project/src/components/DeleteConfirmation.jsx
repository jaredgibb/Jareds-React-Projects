import { useEffect, useState } from 'react';
const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime, setRemainingTime] = useState(TIMER)
  
  useEffect(() => {
  const countDown =  setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);


    return () => {
      clearInterval(countDown);
    }
  }, [])

  //cleanup function is returned from useEffect
  //this function runs before the next effect runs
  //OR before the component is unmounted
  //this is useful for cancelling any pending requests, subscriptions, or timers
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [TIMER]);

  //must be careful when a dependency is a function that is created in a parent component
  //when the parent is rendered, the function is 'new' and the dependency changes
  //this causes the effect to run again
  //this can be fixed by using the useCallback hook


  return (
    <div id='delete-confirmation'>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id='confirmation-actions'>
        <button
          onClick={onCancel}
          className='button-text'>
          No
        </button>
        <button
          onClick={onConfirm}
          className='button'>
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
