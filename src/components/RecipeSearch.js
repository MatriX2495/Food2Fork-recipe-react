import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const {handleChange,handleSubmit,value} = this.props;

    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 col-md-8 mx-auto my-5 text-center">
              <h1 className="text-capitalize text-slanted">
                search for recipe with <strong className="text-danger">food2Fork</strong>
              </h1>
              <form className="mt-3" onSubmit={handleSubmit}>  
              <label htmlFor="search">type recipes separated by commas</label>
                <div className="input-group">
                  <input type="text" name="seacrh" placeholder="carrot,onion" className="form-control text-capitalize" onChange={handleChange} value={value}/>
                  
                  <div className="input-group-append">
                    <button type="submit" className="input-group-text bg-primary text-white">
                    <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
