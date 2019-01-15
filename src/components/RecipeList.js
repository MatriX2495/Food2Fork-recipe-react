import React, { Component } from 'react'
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
    const {recipeList,handleDetails,handleChange,handleSubmit,value,error} = this.props;
    return (
      <React.Fragment>
          <RecipeSearch handleChange={handleChange} value={value} handleSubmit={handleSubmit} />

           <div className="container">
               <div className="row">
                   <div className="col-12 col-md-6 mx-auto text-center text-uppercase mb-3">
                        <h1>Recipe List</h1>
                   </div>
               </div>
               <div className="row">
               {error? <h1 className="text-danger text-capitalize mx-auto">{error}</h1> :recipeList.map(recipe => {
                    return(
                        <Recipe key={recipe.recipe_id} recipeList={recipe} handleDetails={() => handleDetails(1,recipe.recipe_id)}/>
                    )
                })}
                
               </div>
           </div>
      </React.Fragment>
    )
  }
}
