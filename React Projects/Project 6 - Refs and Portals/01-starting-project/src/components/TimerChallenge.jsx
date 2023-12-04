import { useState, useRef } from 'react';
//let timer;
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, time }) {
  const [timeRemaining, setTimeRemaining] = useState(time * 1000);
  //usign ref to store the timer id instead of a variable because the variable will be reset on every render
  //we also dont store it outside the component because we dont want to pollute the global scope
  //variables set outside the component, insdie the file will then be shared between all instances of the component
  const timer = useRef();
  const dialog = useRef();

  const timerStarted = timeRemaining > 0 && timeRemaining < time * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(time * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={time}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        {timeRemaining <= 0 && <p>Time Expired!</p>}
        <p className='challenge-time'>
          {time} second{time === 1 ? '' : 's'}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className=''>
          {timerStarted ? 'Timer is running' : 'Timer is stoppoed'}
        </p>
      </section>
    </>
  );
}
