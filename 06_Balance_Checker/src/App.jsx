
import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Result from "./Components/Result";

function App() {
   const [userInput, setInput] = useState({
     initialInvestment: 10000,
     annualInvestment: 1200,
     expectedReturn: 6,
     duration: 10,
   });

   
  function handleChange(inputField, newValue) {
    setInput((prevInput) => ({
      ...prevInput,
      [inputField]: +newValue,
    }));
  }
  return (
    <div id="header" >
   <h1>React Investment Calculator</h1>
   <Header />
   <UserInput userInput ={userInput} onChange = {handleChange}/>
   <Result input={userInput}/>
  </div>
  )
}

export default App;
