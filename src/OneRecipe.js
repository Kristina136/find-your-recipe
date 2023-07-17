import { useState } from "react"
import done2 from "./done2.gif"
import TabsItem from "./TabsItem"
import Tabs from "./Tabs"
import TabsInfoOne from "./TabsInfoOne"
import TabsInfoTwo from "./TabsInfoTwo"
import TabsInfoTree from "./TabsInfoTree"
function OneRecipe ({list, totalTime, word,newFunk1, newFunc, label, calories, url, img, ingredients}){

    let ArrFromAlIng=""
    let filteredIng=[]
    let filteredArr=[]
    const [stateAdded, setStateAdded]= useState(false)
const [activTab, setActivTab]=useState(1)

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


<Tabs setActivTab={setActivTab}/>
{activTab===0 && <TabsInfoOne filtered={filtered} filteredIng={filteredIng} ingredients={ingredients} ArrFromAlIng={ArrFromAlIng}/>}
{activTab===1 && <TabsInfoTwo calories={calories}/>}
{activTab===2 && <TabsInfoTree totalTime={totalTime}/>}

<a href={url}>Open recipe</a> <br></br>
<button onClick={save} className="btn">{stateAdded ?  <img src={done2} width="45px" alt="done"/> : "Add to favorites" }</button>


</div>
</div>
    )
}
export default OneRecipe;