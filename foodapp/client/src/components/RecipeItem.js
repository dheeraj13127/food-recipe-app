import React,{useState} from 'react'
import '../App.css'
import RecipeIngredients from './RecipeIngredients'
const RecipeItem = (props) => {
  const [show,setshow]=useState(false)
  const {name,image,ingredientLines,calories,url}=props
  return (
    <div class="card py-2 text-center" style={{backgroundColor:"black"}}>
      <img src={image} className="img-fluid w-50 mx-auto mt-3"/>
      <div className="card-body">
        <h5 className="card-title text-light">{name}</h5>
      </div>
  <div className="calories pb-3 text-light">Calories: {calories}</div>
      <button onClick={()=>setshow(!show)} className="btn ing-btn w-50 mx-auto">Ingredients</button>
      { show && <RecipeIngredients ingredientLines={ingredientLines}/>}
     <a href={url} className="mt-3">Know more</a>
    </div>
  )
}

export default RecipeItem
