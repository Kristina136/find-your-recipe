
function TabsInfoOne ({ingredients, filtered, filteredIng, ArrFromAlIng}){



    return(<div className="containerWithList">
            {/* <ul>
    {ingredients.map((ing,id)=>{
         let arr= (ArrFromAlIng+=ing.food+"+").split("+")
         if (arr.length===ingredients.length+1){filteredIng.push(...arr)} 
          return(<li className="allIng"  key={id}>{ing.food} <button onClick={()=>filtered(ing, id)} className="btnAddToGrosseryList">🛒</button></li>)
        }
    )}
</ul>  */}
 <ul>
    {ingredients.map((ing,id)=>{
          return(<li className="allIng"  key={id}>{ing.food} <button onClick={()=>filtered(ing, id)} className="btnAddToGrosseryList">🛒</button></li>)
        }
    )}
</ul> 
      </div>
          )
      }
      export default TabsInfoOne;