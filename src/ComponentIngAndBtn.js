

import { useState } from "react"

function ComponentIngAndBtn ({addFunc, list, word, el, id}){

//state with true or false
    const [clicked, setClicked] = useState(true)
    

 //add to Grossery List by click
 const add=(el, id)=>{
  addFunc([list.push((word.map(e=>(e[3])).flat().filter((item, index)=>(index===id && item)).join()))])
  setClicked(false)
 }

    return(<div className="contIngAndBtn" key={id}> 
      <li className="list">{el}</li>
      <button  onClick={()=>add(el,id)}  
      className="btnAddToGrosseryList">
        {clicked ? "🛒" : "✔️"}</button>
      </div>
          )
      }
      export default ComponentIngAndBtn;