import classes from "./Game.module.scss";
import Row from "./Row/Row";
import { useState } from "react/cjs/react.development";

const Game = (props) => {
  console.log("[GAME COMPONENT]");
  const [isAnswersChecks, setIsAnswersChecks] = useState(false);
  const [positivePoints, setPositivePoints] = useState(0);
  const [negativePoints, setNegativePoints] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswers = () => {
    setIsAnswersChecks(!isAnswersChecks);
    const rightAnswersWerentOpen =
      props.data.good_words.length - positivePoints;
    const result =
      positivePoints * 2 - (negativePoints + rightAnswersWerentOpen);
    setScore(result);
  };

  const pointCounter = (word) => {
    if (props.data.good_words.includes(word)) {
      setPositivePoints(positivePoints + 1);
    } else {
      setNegativePoints(negativePoints + 1);
    }
  };

  return (
    <section className={classes.section}>
      <h2>{props.data.question}</h2>
      <div className={classes.playground}>
        {props.rows.map((row, index) => {
          return (
            <Row
              key={index}
              words={row}
              pointCounter={pointCounter}
              isAnswersChecks={isAnswersChecks}
              answers={props.data.good_words}
            />
          );
        })}
      </div>
      {
        <button
          onClick={
            !isAnswersChecks
              ? checkAnswers
              : () => props.finishTheGameHandler(score)
          }
        >
          {!isAnswersChecks ? "check answers" : "finish game"}
        </button>
      }
    </section>
  );
};

export default Game;
