import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import { useEffect, useState } from 'react';
import Favorites from './Favorites';
import Added from './Added';



function App() {

  const [word, setWord] =useState(localStorage.word ? JSON.parse(localStorage.word) :[])
  const [list, setList]=useState(localStorage.list ? JSON.parse(localStorage.list) :[])
  const addFromFav=()=>{
    setList([...list])
  }
  
 //localStorage for save recipe in favorite
 useEffect(()=>{
  localStorage.setItem("word", JSON.stringify(word))
}, [word])

 //localStorage for save ingredients in grossery list
 useEffect(()=>{
  localStorage.setItem("list", JSON.stringify(list))
}, [list])

console.log(list)
  return (<Router>
<nav>
  <Link to="/" className='link'>Home</Link>
  <Link to="/Favorites" className='link'>Favorites</Link>
  <Link to="/Grossery-list" className='link'>Grossery list</Link>

</nav>
<Routes>
<Route path='/' element={<Home  word={word} setWord={setWord}  list={list} setList={setList}/>}/>
<Route path='/Favorites' element={<Favorites newFunk2={addFromFav} word={word} setWord={setWord}  list={list} setList={setList}/>}/>
<Route path='/Grossery-list' element={<Added list={list} setList={setList}/>}/>



 </Routes>
  </Router>
  );
}

export default App;
