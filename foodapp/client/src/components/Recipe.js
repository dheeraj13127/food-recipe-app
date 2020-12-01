import React from 'react'
import RecipeItem from '../components/RecipeItem'
const Recipe = ({recipes}) =>{
  console.log(recipes)
  return (
    
        <div className="card-columns pt-3">
        {recipes.map(recipe=>{
         return  <RecipeItem key={Math.random()*100} name={recipe.recipe.label} image={recipe.recipe.image} ingredientLines={recipe.recipe.ingredientLines} calories={recipe.recipe.calories} url={recipe.recipe.url}/>
        })}
        </div>
       
      
  )
}

export default Recipe
