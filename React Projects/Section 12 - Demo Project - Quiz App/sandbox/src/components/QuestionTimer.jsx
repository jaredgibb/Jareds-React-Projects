import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, timeExpired, mode }) {
  const [timeLeft, setTimeLeft] = useState(timeout);

  useEffect(() => {
    const i = setInterval(() => {
      setTimeLeft((prevValue) => prevValue - 100);
    }, 100);

    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const t = setTimeout(timeExpired, timeout);

    return () => clearTimeout(t);
  }, [timeExpired, timeout]);

  return (
    <progress
      id='question-timer'
      max={timeout}
      value={timeLeft}
      className={mode}
    />
  );
}
