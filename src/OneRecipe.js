import { useState } from "react"
import done2 from "./done2.gif"
import Tabs from "./Tabs"
import TabsInfoOne from "./TabsInfoOne"
import TabsInfoTwo from "./TabsInfoTwo"
import TabsInfoTree from "./TabsInfoTree"
function OneRecipe ({list, totalTime, word,saveToFav, addFunc, label, calories, url, img, ingredients}){

    let ArrFromAlIng=""
    let filteredIng=[]
    const [stateAdded, setStateAdded]= useState(false)
const [activTab, setActivTab]=useState(1)



//display favorites element
const save=()=>{
    let arrWithFood= ingredients.map(e=>e.food) 
// console.log(arrWithFood) //['sugar', 'lemons', ..]
    setStateAdded(true)
    saveToFav([word.push([img,label,url,arrWithFood])])
}

      return(
      <div>
      <div className="eachRecipe">
        <img src={img} alt="alt" width="200px"/>
<h2 className="label" onClick={save}>{label}</h2>

<Tabs setActivTab={setActivTab}/>
{activTab===0 && <TabsInfoOne 
                                filteredIng={filteredIng} 
                                ingredients={ingredients} 
                                ArrFromAlIng={ArrFromAlIng}
                                list={list}
                                addFunc={addFunc}
                                />}
{activTab===1 && <TabsInfoTwo calories={calories}/>}
{activTab===2 && <TabsInfoTree totalTime={totalTime}/>}

<a href={url}>Open recipe</a> <br/>

<button onClick={save} className="btn">{stateAdded ?  
<img src={done2} width="45px" alt="done"/> : "Add to favorites" }
</button>


</div>
</div>
    )
}
export default OneRecipe;