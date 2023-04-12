import "./App.css";
import Counter from "./components/counter/Counter";
import Toggle from "./components/state/Toggle";
import Game from "./components/tictactoe/Game";
import YoutubeList from "./components/youtube/YoutubeList";

function App() {
  // const name = "DUC NGUYEN";
  return (
    <div>
      <div>
        <YoutubeList>
          {/* <p>{name}</p> */}
        </YoutubeList>
      </div>
      <div>
        <Toggle></Toggle>
        <Counter></Counter>
      </div>
      <div>
        <Game></Game>
      </div>
    </div>
  );
}

export default App;
