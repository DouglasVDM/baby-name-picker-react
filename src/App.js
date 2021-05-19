import { BabyNamesData } from "./BabyNamesData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>Baby Names Data</h3> 
      </header>
      <div style={{border: ".2rem solid green"}}>
        {BabyNamesData.sort((name1,name2)=>name1.name.localeCompare(name2.name)).map((el) => {
          return (
            <div style={{ border: ".1rem solid blue" }} key={el.id}>{el.name}</div>
          )
        })
          }
      </div>
    </div>
  );
}

export default App;
