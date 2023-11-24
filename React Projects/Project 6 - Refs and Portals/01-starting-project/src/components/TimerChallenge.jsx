export default function TimerChallenge({ title, time, onClickHandle }) {
  return (
    <section className='challenge'>
      <h2>{title}</h2>
      <p className='challenge-time'>
        {time} second{time === 1 ? '' : 's'}
      </p>
      <p>
        <button onClick={onClickHandle}>Start Challenge</button>
      </p>
      <p className=''>Time is running... / Timer inaactive</p>
    </section>
  );
}
