import React, { useState } from "react";
import "./InputGroup.css";
import Input from "./Input";

function FirstInputGroup(props) {
  const inputChangeHandler = (input, value) => {
    if (input === "current-savings") {
      props.setCurrentSaving(value);
    } else {
      props.setYearlyContribution(value);
    }
  };

  return (
    <div className={props.className}>
      <Input
        htmlFor="current-savings"
        type="number"
        id="current-savings"
        title="Current Savings ($)"
        onChange={(event) => {
          inputChangeHandler("current-savings", event.target.value);
        }}
        value={props.currentSaving}
      ></Input>
      <Input
        htmlFor="yearly-contribution"
        type="number"
        id="yearly-contribution"
        title="Yearly Savings ($)"
        onChange={(event) => {
          inputChangeHandler("yearly-contribution", event.target.value);
        }}
        value={props.yearlyContribution}
      ></Input>
    </div>
  );
}
export default FirstInputGroup;
