import { useState, useRef } from 'react';
//let timer;
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, time }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  //usign ref to store the timer id instead of a variable because the variable will be reset on every render
  //we also dont store it outside the component because we dont want to pollute the global scope
  //variables set outside the component, insdie the file will then be shared between all instances of the component
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimerExpired(false);
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialog.current.open()

    }, time * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={time}
        result='lost'
      />
      <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>Time Expired!</p>}
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
