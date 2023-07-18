import React, { useState } from "react";
import "./InputGroup.css";
import Input from "./Input";

function SecondInputGroup(props) {
  const inputChangeHandler = (input, value) => {
    if (input === "expected-return") {
      props.setExpectedReturn(value);
    } else {
      props.setDuration(value);
    }
  };
  return (
    <div className={props.className}>
      <Input
        htmlFor="expected-return"
        type="number"
        id="expected-return"
        title="Expected Interest (%, per year)"
        onChange={(event) => {
          inputChangeHandler("expected-return", event.target.value);
        }}
        value={props.expectedReturn}
      ></Input>
      <Input
        htmlFor="duration"
        type="number"
        id="duration"
        title="Investment Duration (years)"
        onChange={(event) => {
          inputChangeHandler("duration", event.target.value);
        }}
        value={props.duration}
      ></Input>
    </div>
  );
}
export default SecondInputGroup;
