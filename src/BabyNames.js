import React, { useState } from 'react';
import Favourites from './Favourites';

function BabyNames({ babyList }) {

  const babyFilterList = babyList

  const [favourite, setFavourite] = useState([]);
  const [sortedNames, setSortedNames] = useState([...babyFilterList]);


  sortedNames.sort((name1, name2) => name1.name.localeCompare(name2.name));
  
  function favouriteBaby(name) {    
    if (favourite.includes(name)) {
      setFavourite(favourite.filter(el => el !== name));
    } else {
      setFavourite(favourite.concat(name))
      setSortedNames(sortedNames.filter(el=>el!==name))
    }    
  }
  
  return (
    <div>
      <Favourites favourite={favourite} />
      <div style={{ display: "flex", flexWrap: "wrap", height: "fit-content", border: ".2rem solid green" }}>
        {sortedNames
          .map((babyName) => {

            let color = babyName.sex === "f" ? "#ff000080" : "#00ff0080";

            return (
              <p value="" style={
                {
                  padding: ".5rem",
                  margin: ".2rem",
                  width: "fit-content",
                  backgroundColor: color,
                  textAlign: "center"
                }}
                key={babyName.id}
                onClick={() => favouriteBaby(babyName.name)}
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
