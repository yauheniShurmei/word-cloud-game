import classes from "./Result.module.scss";

const Result = (props) => {
  return (
    <section className={classes.section}>
      <h1>Congratulations, {props.playerName}!</h1>
      <h1>Your score:</h1>
      <h1 style={{ color: "#2576ce" }}>{props.score}</h1>
      <div>
        <button onClick={() => props.playOneMoreTime(false)}>
          One More Time
        </button>
        <button onClick={() => props.playOneMoreTime(true)}>Logout</button>
      </div>
    </section>
  );
};

export default Result;
