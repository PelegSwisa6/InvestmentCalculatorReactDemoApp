import React, { useState } from "react";
import "./FormInputs.css";
import FirstInputGroup from "./FirstInputGroup";
import SecondInputGroup from "./SecondInputGroups";
import Buttons from "../UI/Buttons";
function FormInputs(props) {
  const [currentSavings, setCurrentSaving] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const calculate = (event) => {
    event.preventDefault();
    const userInput = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };
    props.onCalculateHandler(userInput);
  };
  return (
    <form onSubmit={calculate} className="form">
      <FirstInputGroup
        className="input-group"
        setCurrentSaving={setCurrentSaving}
        setYearlyContribution={setYearlyContribution}
        yearlyContribution={yearlyContribution}
        currentSavings={currentSavings}
      ></FirstInputGroup>
      <SecondInputGroup
        className="input-group"
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
        expectedReturn={expectedReturn}
        duration={duration}
      ></SecondInputGroup>
      <Buttons
        onCalculateHandler={props.calculateHandler}
        setCurrentSaving={setCurrentSaving}
        setYearlyContribution={setYearlyContribution}
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
        setData={props.setData}
      ></Buttons>
    </form>
  );
}
export default FormInputs;
