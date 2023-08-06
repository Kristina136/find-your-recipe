
import ComponentWithIng from "./ComponentWithIng"

function Favorites ({word, setWord, list, addFunc}){

  //delete element from  favorites
 const deleteFromFav=(e,i)=>{
  setWord(word.filter((item, id)=>(id!==i)))
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
  addFunc={addFunc} 
   element={element} 
   deleteFromFav={deleteFromFav}
word={word}
list={list}
   />)})}
 </div>
</div>
        )
    }
    export default Favorites;