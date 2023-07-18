import React from "react";
import Button from "./Button";
import "./Buttons.css";
function Buttons(props) {
  const resetHandler = () => {
    props.setCurrentSaving("");
    props.setYearlyContribution("");
    props.setExpectedReturn("");
    props.setDuration("");
    props.setData("");
  };
  return (
    <p className="actions">
      <Button onClick={resetHandler} type="reset" className="buttonAlt">
        Reset
      </Button>
      <Button type="submit" className="button">
        Calculate
      </Button>
    </p>
  );
}

export default Buttons;
