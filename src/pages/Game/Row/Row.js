import Word from "../Word/Word";
import classes from "./Row.module.scss";

const Row = (props) => {
  return (
    <ul className={classes.row}>
      {props.words.map((word, index) => {
        return (
          <Word
            key={index}
            word={word}
            pointCounter={props.pointCounter}
            isAnswersChecks={props.isAnswersChecks}
            answers={props.answers}
          />
        );
      })}
    </ul>
  );
};

export default Row;
