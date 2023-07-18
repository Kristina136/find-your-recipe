 import { useState } from "react"

function Favorites ({word, setWord,list, setList, newFunk2}){
 
  //delete element from  favorites
 const deleteFromFav=(e,i)=>{
  setWord(word.filter((item, id)=>(id!==i)))
 }
 //state for accordion with list of ingredients
 const [isOpen, setIsOpen] = useState(true)
 
 //toggle false/true on bei Click
 const handleIsOpen=(i)=>{
     setIsOpen(!isOpen)
   }

   const [a, setA] = useState(true)
   //add to Grossery List by click
   const add=(el, id)=>{
     newFunk2([list.push((word.map(e=>(e[3])).flat().filter((item, index)=>{ if(index===id) {return item}}).join()))])
     setA(false)
}
   
  return(<div className="App">
    <h1>Add your favorit recipes</h1>
            <div id="contEl" className='containerSaved'>
  {word.map((element, i)=>{return(<div className="saved" key={i}>
    <img className="smallImg" width="100px" src={element[0]} alt="alt"/>
    <h2>{element[1]}</h2>
    <div className="contTabs">
    <button className="btnEachAccordion" onClick={()=>handleIsOpen(i)}>
      {!isOpen ? "Close ingredient's list" : "Open ingredient's list"}
    </button>
   {/* { element[3].map((e,i)=>console.log(e,i))} */}
    {!isOpen && <div className="">{element[3].map((el, id)=>{return (<div className="contIngAndBtn" key={id}> 
      <li className="list">{el}</li>
      <button  onClick={()=>add(el,id)}  className="btnAddToGrosseryList">{a ? "Add" : "✔️"}</button>
      </div>)})
    
    }</div>
   }
    </div>
    
     <a href={element[2]}>Open recipe</a><br/>
    <button className="btnDelFromFav" onClick={()=>deleteFromFav(element,i)}>Delete</button>
    </div>)})}
 </div>
</div>
        )
    }
    export default Favorites;