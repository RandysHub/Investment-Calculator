import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }



  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter duration greater than 0</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
