import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge /> 
        <TimerChallenge />
        <TimerChallenge />
        <TimerChallenge />

      </div>
    </>
  );
}

export default App;
