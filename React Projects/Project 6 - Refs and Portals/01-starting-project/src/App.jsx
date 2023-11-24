import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Challenge 1" time={5} />
        <TimerChallenge title="Challenge 2" time={10} />
        <TimerChallenge title="Challenge 3" time={15} />
        <TimerChallenge title="Challenge 4" time={20} />
      </div>
    </>
  );
}

export default App;
