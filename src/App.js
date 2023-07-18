import Header from "./components/UI/Header";
import FormInputs from "./components/Inputs/FormInputs";
import Table from "./components/ResultTable/Table";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState([]);

  const calculateHandler = (userInput) => {
    setInitialInvestment(+userInput["currentSavings"]);
    const yearlyData = [];
    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setData(yearlyData);
  };

  return (
    <div>
      <Header></Header>
      <FormInputs
        setData={setData}
        onCalculateHandler={calculateHandler}
      ></FormInputs>
      <Table data={data} initialInvestment={initialInvestment}></Table>
    </div>
  );
}

export default App;
