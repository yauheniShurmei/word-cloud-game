import "./App.css";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";
import Result from "./pages/Result/Result";
import { getRandomData } from "./DATA/DATA";
import { rowsVariaty } from "./creatorRandomlyRowsAndColomns/creatorRandomlyRowsAndColomns";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playerName, setPlayerName] = useState();
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);

  const data = getRandomData();
  const rows = rowsVariaty(data.all_words);

  const loginHandler = (name) => {
    setIsLoggedIn(!!name);
    setPlayerName(name);
  };

  const finishTheGameHandler = (score) => {
    setIsFinish(!isFinish);
    setScore(score);
  };

  const playOneMoreTime = (isLogout) => {
    setIsFinish(!isFinish);
    isLogout && setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      {!isLoggedIn && <Login loginHandler={loginHandler} />}
      {isLoggedIn && !isFinish && (
        <Game
          rows={rows}
          data={data}
          finishTheGameHandler={finishTheGameHandler}
        />
      )}
      {isFinish && isLoggedIn && (
        <Result
          playerName={playerName}
          score={score}
          playOneMoreTime={playOneMoreTime}
        />
      )}
    </div>
  );
}

export default App;
