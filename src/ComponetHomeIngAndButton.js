

import { useState } from "react"

function ComponentHomeIngAndButton ({ingredients, addFunc, list, ing, id}){


    //state with true or false
    const [changeImg, setChangeImg] = useState(false)

    //add to Grossery List
    const filtered=(ing, id)=>{
        let arrWithFood= ingredients.map(e=>e.food) 
      let filteredArr=arrWithFood.filter((item, index)=>( index===id &&  <li>{item}</li>))
      addFunc([list.push(filteredArr.join())])
      setChangeImg(true)
    }

    return(
        <div><li className="contIngAndBtn"  key={id}>{ing.food} 
          <button onClick={()=>filtered(ing, id)} className="btnAddToGrosseryList">{changeImg ? "✔️" : "🛒"}</button>
          </li></div>
          )
      }
      export default ComponentHomeIngAndButton;