
import ComponentHomeIngAndButton from "./ComponetHomeIngAndButton"

function TabsInfoOne ({ingredients, newFunc, list}){

    

    return(<div className="containerWithList">
        
 <ul>
    {ingredients.map((ing,id)=>{
          return(<ComponentHomeIngAndButton key={id}
            ingredients={ingredients}
            newFunc={newFunc}
            list={list}
            ing={ing}
            id={id}
            />)
        }
    )}
</ul> 
      </div>
          )
      }
      export default TabsInfoOne;