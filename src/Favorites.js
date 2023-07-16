function Favorites ({word}){
  
const deleteEl=(e)=>{
  
const del=e.target
del.classList.toggle("del")
}
  return(<div className="App">
    <h1>Add your favorit recipes</h1>
            <div onClick={deleteEl} className='containerSaved'>
  {word}
  </div>
</div>
        )
    }
    export default Favorites;