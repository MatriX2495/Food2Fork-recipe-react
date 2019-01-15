import React, { Component } from 'react'
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            recipe : recipe,
            url : `https://www.food2fork.com/api/get?key=754445ac67a42363f6f8b146e49ba8a0&rId=${this.props.details_id}`
        }
    }
    async componentDidMount() {
        try {
          const data = await fetch(this.state.url);
          const jsonData = await data.json();
          
          this.setState({
            recipe: jsonData.recipe
          });
        } catch (error) {
          console.log(error);
        }
      }

  render() {
    const {image_url,ingredients,publisher,publisher_url,source_url,title} = this.state.recipe;
    const {handleIndex} = this.props;

    return (
      <React.Fragment>
          <div className="container my-5">
              <div className="row">
                  <div className="col-10 col-md-6 mx-auto">
                    <button className="btn bg-warning text-capitalize mb-5" onClick={()=>handleIndex(0)}>back to recipe list</button>
                    <img src={image_url} alt={title} className="d-block w-100"/>
                  </div>
                  <div className="col-10 col-md-6 mx-auto">
                    <h6 className="text-uppercase">
                        {title}
                    </h6>
                    <div className="text-slanted text-warning text-capitalize">
                        publised by {publisher}
                    </div>

                    <a href={publisher_url} className="btn bg-warning mr-3 my-3 text-capitalize" target="_blank" rel="noopener noreferrer">publisher webpage</a>
                    <a href={source_url} className="btn bg-primary ml-3 my-3 text-capitalize" target="_blank" rel="noopener noreferrer">recipe url</a>

                    <ul className="list-group">
                        <h3 className="text-capitalize">Ingredients</h3>
                        {
                           ingredients.map((item,index) => {
                                return(
                                    <li key={index} className="list-group-item">
                                        {item}
                                    </li>
                                );
                            })
                        }
                    </ul>
                  </div>
              </div>
          </div>
      </React.Fragment>
    )
  }
}
