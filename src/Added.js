import { useState } from "react";
import icon from "./icons8.gif"


function Added ({ list,setList}){

  const [isOpen, setIsOpen]=useState(true)
const handleIsOpen=()=>{
  setIsOpen(!isOpen)
}

  const deleteFromGrosseryList=(e, i)=>{
    setList(list.filter((item, id)=>(id!==i)))
  }
  const lineThrough=(e)=>{
    const li= e.target
    li.classList.toggle("red")
  }
  
  return(<div className="containerWithList">
            <div onClick={handleIsOpen} className={isOpen ? "activ" : "default"}>
            <h3>{isOpen ? "Close your grocery list" : "Show your grocery list"} <img src={icon} width="20px" alt="alt"/></h3>
            </div>
            {isOpen && <ul>{list.map((e, i)=>{return(<div key={i} className="contIngAndBtn">
              <li className="list" onClick={lineThrough} >{e}</li>
              <button className="btnDel" onClick={()=>deleteFromGrosseryList(e, i)}>❌</button>
              </div>
            
            )})}</ul>}
    </div>
        )
    }
    export default Added;