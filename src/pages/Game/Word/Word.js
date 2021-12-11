import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Word = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isGood, setIsGood] = useState(false);
  const [styleOfListElement, setStyleOfListElement] = useState(null);
  const [positionOfAnswer, setPositionOfAnswer] = useState();

  const getStyleObjectWithRandomProperty = () => {
    const styleOfListElement = {};
    let topPositionOfAnswer;
    const randomNumb = Math.floor(Math.random() * 3);
    if (randomNumb === 1) {
      styleOfListElement.alignItems = "flex-end";
      styleOfListElement.justifyContent = "center";
      topPositionOfAnswer = "-20px";
    } else if (randomNumb === 2) {
      styleOfListElement.alignItems = "flex-start";
      styleOfListElement.justifyContent = "end";
      topPositionOfAnswer = "-33px";
    } else {
      styleOfListElement.alignItems = "center";
      styleOfListElement.justifyContent = "start";
      topPositionOfAnswer = "-25px";
    }
    setStyleOfListElement(styleOfListElement);
    setPositionOfAnswer({
      position: "absolute",
      top: topPositionOfAnswer,
    });
  };

  useEffect(() => {
    getStyleObjectWithRandomProperty();
  }, []);

  const selectTheWordHandler = (word) => {
    if (props.isAnswersChecks) {
      return;
    }
    !isSelected && props.pointCounter(word);
    setIsSelected(true);
    setIsGood(props.answers.includes(word));
  };

  let styleIsSelected = isSelected ? { color: "gray" } : { color: "black" };
  const color = isGood ? { color: "green" } : { color: "red" };
  if (props.isAnswersChecks && isSelected) {
    styleIsSelected = isGood ? { color: "green" } : { color: "red" };
  }

  const answer = (
    <div style={Object.assign({ ...positionOfAnswer, ...color })}>
      {isGood ? "Good" : "Bad"}
    </div>
  );

  if (!styleOfListElement) {
    return null;
  }

  return (
    <li
      key={props.index}
      style={Object.assign({
        ...styleOfListElement,
        ...styleIsSelected,
      })}
      onClick={() => selectTheWordHandler(props.word)}
    >
      <span style={styleIsSelected}>
        {props.isAnswersChecks && isSelected && answer}
        {props.word}
      </span>
    </li>
  );
};

export default Word;
