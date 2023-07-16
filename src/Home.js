import { useEffect, useState } from 'react';

import OneRecipe from './OneRecipe';




function Home({ word, setWord ,list, setList}) {


  const id="640ffb22";
  const key= "4229630f925fe6fd8eb1406c7dff251b";

  const[input, setInput]= useState("");
  const[myRec, setMyRes]= useState([]);
  const[wordApi, setWordApi]= useState(localStorage.wordApi ? JSON.parse(localStorage.wordApi) : "salmon");
  
  // const [list, setList]=useState([])
//   const [word, setWord] =useState([])

 //localStorage for save a word in input
  useEffect(()=>{
    localStorage.setItem("wordApi", JSON.stringify(wordApi))
  }, [wordApi])

const filtered=()=>{
  setList([list])
  }
const save=()=>{
  setWord([word])
}



//get API
  useEffect(()=>{
    const getRecipe = async() =>{
      const response= await fetch(`https://api.edamam.com/search?q=${wordApi}&app_id=${id}&app_key=${key}`)
      const data=await response.json();
      setMyRes(data.hits)
    }
      getRecipe()
      },[wordApi] )


     //look what write user
  const userInput=(e)=>{
       setInput(e.target.value)
       }

       //change state with new word by click buttom or enter
  const searchRec =(e)=>{
   e.preventDefault()
        setWordApi(input);
       }
 
  

  return (
    <div className="App">
  
     <h1>Find recipe by ingredient</h1>
    {/* <Added 
    list={list}/> */}
     <form onSubmit={searchRec}>
<input onChange={userInput} value={input} placeholder="Find recipes by ingredients..."/>
</form>
<button onClick={searchRec}>Search</button>
  <div>
    <h2> {myRec.length} recipes is found</h2>


<div className='allRecipe'>
{myRec.map((el,i)=>{return<OneRecipe key={i}
 label={el.recipe.label}
 calories={el.recipe.calories}
 url={el.recipe.url}
 img={el.recipe.image}
ingredients= {el.recipe.ingredients}
newFunc={filtered}
 newFunk1={save}
list={list}
word={word}
setInput={setInput}
 />})}
 </div>
  </div>  
    
    </div>
  );
}

export default Home;
