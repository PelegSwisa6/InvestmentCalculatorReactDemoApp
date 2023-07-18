import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.title} </label>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
    </p>
  );
}
export default Input;
