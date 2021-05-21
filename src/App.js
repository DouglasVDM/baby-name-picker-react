import { BabyNamesData } from "./BabyNamesData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>Baby Names Data</h3> 
      </header>
      <div style={{ display: "flex", flexWrap: "wrap" , height: "fit-content" ,border: ".2rem solid green"}}>
        {BabyNamesData
          .sort((name1, name2) => name1.name.localeCompare(name2.name))
          .map((sortedName) => {

            let color = sortedName.sex === "f" ? "#ff000080" : "#00ff0080";
            
            return (
            <p style={
              {
                padding: ".5rem",
                margin: ".2rem",
                width: "fit-content",
                backgroundColor: color,
                textAlign: "center"
              }}
              key={sortedName.id}>
              {sortedName.name}
            </p>
          )}
          )        
        }
      </div>
    </div>
  )
}

export default App;