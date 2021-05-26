import React, { useState } from "react";
import BabyNames from "./BabyNames";
import SearchBar from "./SearchBar";
import { BabyNamesData } from "./data";


function App() {

  const [input, setInput] = useState('');
  const [babyList, setBabyList] = useState(BabyNamesData);
  console.log("babyList-before:", babyList);
/*
  const dataBaby = (data => {
    setBabyList(data)
    setBabyListDefault(data)
  })
*/
  
  const updateInput = (input) => {
    const filtered = babyList.filter(baby => {
      return (
        baby.name.toLowerCase().includes(input.toLowerCase())
      )
    })
    setInput(input);
    setBabyList(filtered);
    console.log("babyList-after:", babyList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Baby Names Picker</h3>
        <SearchBar input={input} onChange={updateInput} />
        <BabyNames babyList={ babyList }/>
      </header>

    </div>
  )
}

export default App;
