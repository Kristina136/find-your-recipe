
import { useState } from "react"
import ComponentWithIng from "./ComponentWithIng"

function Favorites ({word, setWord,list, setList, newFunk2}){

       
  //delete element from  favorites
 const deleteFromFav=(e,i)=>{
  setWord(word.filter((item, id)=>(id!==i)))
 }
   
 const [a, setA] = useState(true)
 //add to Grossery List by click
 const add=(el, id)=>{
   newFunk2([list.push((word.map(e=>(e[3])).flat().filter((item, index)=>(index===id && item)).join()))])
   setA(false)
}


  return(<div className="App">
    <h1>Add your favorit recipes</h1>
            <div id="contEl" className='containerSaved'>
  {word.map((element, i)=>{return(<ComponentWithIng key={i}
  i={i}
  img = {element[0]}
  label={element[1]}
  ingredients={element[3]}
  link={element[2]}
   newFunk2={newFunk2} 
   element={element} 
   deleteFromFav={deleteFromFav}
   add={add}
   a={a}
   />)})}
 </div>
</div>
        )
    }
    export default Favorites;