import React from 'react'

const RecipeIngredients = ({ingredientLines}) => {
  return (
    <div>
       <ul className="list-group pt-3 ">
        {ingredientLines.map(ingredient=>{
          return <li className="list-group-item bg-dark text-light">{ingredient}</li>
        })}
      </ul>
    </div>
  )
}

export default RecipeIngredients
