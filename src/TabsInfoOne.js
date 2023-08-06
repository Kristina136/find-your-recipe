
import ComponentHomeIngAndButton from "./ComponetHomeIngAndButton"

function TabsInfoOne ({ingredients, addFunc, list}){

    

    return(<div className="containerWithList">
        
 <ul>
    {ingredients.map((ing,id)=>{
          return(<ComponentHomeIngAndButton key={id}
            ingredients={ingredients}
            addFunc={addFunc}
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