import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import { useState } from 'react';
import Favorites from './Favorites';
import Added from './Added';



function App() {

  const [word, setWord] =useState([])
  const [list, setList]=useState([])

  return (<Router>
<nav>
  <Link to="/" className='link'>Home</Link>
  <Link to="/Favorites" className='link'>Favorites</Link>
  <Link to="/Grossery-list" className='link'>Grossery list</Link>

</nav>
<Routes>
<Route path='/' element={<Home  word={word} setWord={setWord}  list={list} setList={setList}/>}/>
<Route path='/Favorites' element={<Favorites word={word}/>}/>
<Route path='/Grossery-list' element={<Added list={list}/>}/>



 </Routes>
  </Router>
  );
}

export default App;
