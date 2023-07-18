import React from "react";
import "./Table.css";

function Table(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (props.data.length === 0) {
    return (
      <div>
        <h1 className="enter-data">Please enter data.</h1>
      </div>
    );
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.savingsEndOfYear)}</td>
            <td>{formatter.format(data.yearlyInterest)}</td>
            <td>
              {formatter.format(
                data.savingsEndOfYear -
                  props.initialInvestment -
                  data.yearlyContribution * data.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + data.yearlyContribution * data.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
