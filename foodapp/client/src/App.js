import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Recipe from './components/Recipe';


function App() {

  const [search,setsearch]=useState("")
  const [recipes,setrecipes]=useState([])
  const [query,setquery]=useState("banana")
  const APPID='e5acdaf6'
  const APIKEY= '58680e2962177ef038b134703eefd825'
  const URL=`https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APIKEY}`
  
  useEffect(()=>{
    getData()
  },[query])

  const getData=async()=>{
    const result=await axios.get(URL);
    setrecipes(result.data.hits)
   
  }
  const handleInputChange=(e)=>{
    setsearch(e.target.value)
  }
  const onFormSubmit=(e)=>{
    e.preventDefault()
  setquery(search)
  getData()
    setsearch('')
  }

  return (
   <div>
    <div className="jumbotron text-center mx-auto">
      <h1>Welcome Foodie!!!</h1>
    </div>
    <form onSubmit={onFormSubmit}>
      <div className="input-group mx-auto">
    <input type="text" class="form-control bg-dark text-light" placeholder="Search your recipe..." onChange={handleInputChange} value={search}/>
    <div className="input-group-append">
      <button type="submit" className="btn btn-dark search-button">Search</button>
    </div>
    </div>
    </form>
    <div className="container">
    <Recipe recipes={recipes}/>
    </div>        
   </div>
  );
}

export default App;
