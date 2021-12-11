import { useRef } from "react";
import classes from "./Login.module.scss";

const Login = (props) => {
  const enteredName = useRef("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (enteredName.current.value.trim()) {
      props.loginHandler(enteredName.current.value);
    }
  };

  return (
    <section className={classes.section}>
      <form onSubmit={submitFormHandler}>
        <h1>Wordcloud game</h1>
        <input ref={enteredName} placeholder="Enter your nickname here...." />
        <button>play</button>
      </form>
    </section>
  );
};

export default Login;
