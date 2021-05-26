import React from 'react';

function BabyNames({babyList}) {

  const babyFilterList = babyList

  const sortedNames = babyFilterList
    .sort((name1, name2) => name1.name.localeCompare(name2.name));
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "fit-content", border: ".2rem solid green" }}>
      {sortedNames
        .map((babyName) => {

          let color = babyName.sex === "f" ? "#ff000080" : "#00ff0080";

          return (
            <p style={
              {
                padding: ".5rem",
                margin: ".2rem",
                width: "fit-content",
                backgroundColor: color,
                textAlign: "center"
              }}
              key={babyName.id}>
              {babyName.name}
            </p>
          )
        }
        )
      }
    </div>
  )
}

export default BabyNames
