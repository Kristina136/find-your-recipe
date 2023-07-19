import { useState } from "react"
import ComponentIngAndBtn from "./ComponentIngAndBtn"

function ComponentWithIng ({newFunk2, list, word, deleteFromFav, add, a, img, label,ingredients, link, element, i}){


  
  
   
 //state for accordion with list of ingredients
 const [isOpen, setIsOpen] = useState(true)
 
 //toggle false/true on bei Click
 const handleIsOpen=(i)=>{
     setIsOpen(!isOpen)
   }

    return(<div className="saved" key={i}>
    <img className="smallImg" width="100px" src={img} alt="alt"/>
    <h2>{label}</h2>
    <div className="contTabs">
    <button className="btnEachAccordion" onClick={()=>handleIsOpen(i)}>
      {!isOpen ? "Close ingredient's list" : "Open ingredient's list"}
    </button>
   
    {!isOpen && 
    <div>{ingredients.map((el, id)=>{
        return (<ComponentIngAndBtn
        el={el}
        id={id}
        key={id}
        add={add}
        newFunk2={newFunk2}
        word={word}
        list={list}
        />)})
    
    }</div>
   }
    </div>
    
     <a href={link}>Open recipe</a><br/>
    <button className="btnDelFromFav" onClick={()=>deleteFromFav(element,i)}>Delete</button>
    </div>

          )
      }
      export default ComponentWithIng;