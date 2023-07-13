function OneRecipe ({list, word,newFunk1, newFunc, label, calories, ingredientLines, url, img, ingredients}){

    let ArrFromAlIng=""
    let filteredIng=[]
    let filteredArr=[]

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
const save=()=>{
newFunk1(word.push(<div className="saved" key={label}>{label}</div>))
}



      return(
      <div>
      <div className="eachRecipe">
        <img src={img} alt="alt" width="200px"/>
<h1 onClick={save}>{label}</h1>
<h2>Callories : {calories.toFixed()} Kcal</h2>
<ul>
    {ingredients.map((ing,id)=>{
         let a= (ArrFromAlIng+=ing.food+"+").split("+")
         
         if (a.length===ingredients.length+1){filteredIng.push(...a)} 
          return(<li className="allIng" onClick={()=>filtered(ing, id)} key={id}>{ing.food}</li>)
          
        }
    )}
</ul>

<a href={url}>Open recipe</a>



</div>
</div>
    )
}
export default OneRecipe;