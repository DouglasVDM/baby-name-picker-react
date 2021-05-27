import React, { useState } from 'react';

function BabyNames({ babyList }) {

  const babyFilterList = babyList

  const sortedNames = babyFilterList
    .sort((name1, name2) => name1.name.localeCompare(name2.name));
  
  const favouriteBaby = (name) => console.log(name.target);
  
  return (
    <div>
      <h3>Favourites</h3>
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
                key={babyName.id}
                onClick={favouriteBaby}
              >
                {babyName.name}
              </p>
            )
          }
          )
        }
      </div>

    </div>)
}

export default BabyNames
