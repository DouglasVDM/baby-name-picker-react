import React, { useState } from 'react';

function Favourites({ favourite }) {

  const [baby, setBaby] = useState([]);

  function removeBaby(name) {
    console.log(name);
    if (baby.includes(name)) {
      console.log(baby);
      setBaby(baby.filter(el => el !== name));
    }
  }

  const divStyling = { display: "flex", flexWrap: "wrap", height: "fit-content", border: ".2rem solid green" }

  return (
    <div style={divStyling}>
      <h3>Favourites:</h3>
      {favourite.map((baby) => {
        let color = baby.sex === "f" ? "#ff000080" : "#00ff0080";

        const pStyling = {
          padding: ".5rem",
          margin: ".2rem",
          width: "fit-content",
          backgroundColor: color,
          textAlign: "center"
        }

        return (
          <p value="" style={pStyling}
            key={baby}
            onClick={() => removeBaby(baby)}
          >
            {baby}
          </p>
        )
      }        
      )}
    </div>
  )
}

export default Favourites