import { useEffect, useState } from "react";
import icon from "./icons8.gif"


function Added ({ list}){
  

  const [isOpen, setIsOpen]=useState(true)
const handleIsOpen=()=>{
  setIsOpen(!isOpen)
}


  return(<div className="containerWithList">
            <div onClick={handleIsOpen} className={isOpen ? "activ" : "default"}>
            <h3>{isOpen ? "Close your grocery list" : "Show your grocery list"} <img src={icon} width="20px" alt="alt"/></h3>
            
           
            </div>
            {isOpen && <ul>{list}</ul>}
    </div>
        )
    }
    export default Added;