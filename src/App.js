import React, { Component } from "react";
import "./App.scss";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes : [],
    url : "https://www.food2fork.com/api/search?key=754445ac67a42363f6f8b146e49ba8a0",
    base_url : "https://www.food2fork.com/api/search?key=754445ac67a42363f6f8b146e49ba8a0",
    details_id : '35382',
    index : 0,
    search : '',
    query : '&q=',
    error : ''
  }

  async getRecipe(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      
      if(jsonData.recipes.length === 0){
        this.setState(()=>{
          return{ error : 'sorry!! your search didnot return any result'}
        })
      }
      else{
        this.setState({
          recipes : jsonData.recipes
        })
      }
      
    }
    catch(error){
      console.log("An Error Occured : ",error);
    }
  }

  componentDidMount(){
    this.getRecipe();
  }

  handleIndex = (index) =>{
    this.setState({
      index : index
    })
  }

  handleDetails = (index,recipe_id) => {
    this.setState({
      index: index,
      details_id : recipe_id
    })
  }

  displayPage = (index) =>{
    switch(index){
      default:
      case 0 : 
        return <RecipeList recipeList = {this.state.recipes} handleDetails = {this.handleDetails} handleChange={this.handleChange} value={this.state.search} handleSubmit={this.handleSubmit} error={this.state.error}/>
      case 1 : 
        return <RecipeDetails details_id = {this.state.details_id} handleIndex={this.handleIndex}/>
    }
  }

  handleChange = e =>{
    this.setState({
      search : e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault();

    const {base_url,query,search} = this.state;

    this.setState(
      () => {
        return {url : `${base_url}${query}${search}`,search:""};
      },
      () => {
        this.getRecipe();
      }
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.displayPage(this.state.index)}
      </React.Fragment>
    );
  }
}

export default App;
