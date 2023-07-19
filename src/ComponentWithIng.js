import { useState } from "react"

function ComponentWithIng ({deleteFromFav, add, a, img, label,ingredients, link, element, i}){


  
  
   
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
   
    {!isOpen && <div className="">{ingredients.map((el, id)=>{return (<div className="contIngAndBtn" key={id}> 
      <li className="list">{el}</li>
      <button  onClick={()=>add(el,id)}  className="btnAddToGrosseryList">{a ? "Add" : "✔️"}</button>
      </div>)})
    
    }</div>
   }
    </div>
    
     <a href={link}>Open recipe</a><br/>
    <button className="btnDelFromFav" onClick={()=>deleteFromFav(element,i)}>Delete</button>
    </div>

          )
      }
      export default ComponentWithIng;



