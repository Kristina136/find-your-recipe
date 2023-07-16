import { useState } from "react"
import done2 from "./done2.gif"
function OneRecipe ({list, word,newFunk1, newFunc, label, calories, url, img, ingredients}){

    let ArrFromAlIng=""
    let filteredIng=[]
    let filteredArr=[]
    const [stateAdded, setStateAdded]= useState(false)


//add ingredients in the grossery list
     const filtered=(ing, id)=>{
     filteredArr.push(filteredIng.filter((item, index)=>(index === id)))
     newFunc(list.push(<li className="list" key={id} onClick={line} >{filteredArr.join()}</li>))
}
//add and delete ingredients from glossery list
const line =(e)=>{
    const li= e.target
    li.classList.toggle("red")
    if(e.detail === 2){
        li.classList.toggle("del")
    }
}

//display favorites element
const save=()=>{
    setStateAdded(true)
newFunk1(word.push(
<div className="saved" key={label}>
<img className="smallImg" src={img} alt="alt" width="100px"/>
    <h3>{label}</h3>
    <a href={url}>Open recipe</a>
</div>))
}



      return(
      <div>
      <div className="eachRecipe">
        <img src={img} alt="alt" width="200px"/>
<h2 className="label" onClick={save}>{label}</h2>
<h3>Callories : {calories.toFixed()} Kcal</h3>
<ul>
    {ingredients.map((ing,id)=>{
         let arr= (ArrFromAlIng+=ing.food+"+").split("+")
         if (arr.length===ingredients.length+1){filteredIng.push(...arr)} 
          return(<li className="allIng"  key={id}>{ing.food} <button onClick={()=>filtered(ing, id)} className="btnAddToGrosseryList">🛒</button></li>)
          
        }
    )}
</ul>
<a href={url}>Open recipe</a> <br></br>
<button onClick={save} className="btn">{stateAdded ?  <img src={done2} width="45px" alt="done"/> : "Add to favorites" }</button>


</div>
</div>
    )
}
export default OneRecipe;