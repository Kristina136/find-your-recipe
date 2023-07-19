
function TabsInfoOne ({ingredients, filtered}){



    return(<div className="containerWithList">
        
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