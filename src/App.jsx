import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestement: 12000,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Results input={userInput} />
    </>
  )
}

export default App
