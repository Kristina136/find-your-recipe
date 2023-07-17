function Favorites ({word}){
  
  return(<div className="App">
    <h1>Add your favorit recipes</h1>
            <div id="contEl" className='containerSaved'>
  {word}
 </div>
</div>
        )
    }
    export default Favorites;