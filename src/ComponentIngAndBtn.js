

import { useState } from "react"

function ComponentIngAndBtn ({newFunk2, list, word, el, id}){

//state with true or false
    const [a, setA] = useState(true)
    

 //add to Grossery List by click
 const add=(el, id)=>{
    newFunk2([list.push((word.map(e=>(e[3])).flat().filter((item, index)=>(index===id && item)).join()))])
     setA(false)
 }

    return(<div className="contIngAndBtn" key={id}> 
      <li className="list">{el}</li>
      <button  onClick={()=>add(el,id)}  
      className="btnAddToGrosseryList">
        {a ? "🛒" : "✔️"}</button>
      </div>
          )
      }
      export default ComponentIngAndBtn;