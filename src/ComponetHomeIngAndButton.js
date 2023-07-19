

import { useState } from "react"

function ComponentHomeIngAndButton ({ingredients, newFunc, list, ing, id}){

    const [a, setA] = useState(false)

    //add to Grossery List
    const filtered=(ing, id)=>{
        let arrWithFood= ingredients.map(e=>e.food) 
      let filteredArr=arrWithFood.filter((item, index)=>( index===id &&  <li>{item}</li>))
      newFunc([list.push(filteredArr.join())])
    setA(true)
    }

    return(
        <div><li className="allIng"  key={id}>{ing.food} 
          <button onClick={()=>filtered(ing, id)} className="btnAddToGrosseryList">{a ? "✔️" : "🛒"}</button>
          </li></div>
          )
      }
      export default ComponentHomeIngAndButton;