import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const {image_url,title,publisher,source_url} = this.props.recipeList;
    const {handleDetails} = this.props;

    return (
      <React.Fragment>
          <div className="col-10 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card">
                <img src={image_url} style={{height:"14rem"}} alt={title} />
                <div className="card-body">
                    <h6>{title}</h6>
                    <h6 className="text-slanted text-warning text-capitalize">
                        published by {publisher}
                    </h6>
                </div>
                <div className="card-footer">
                    <button className="btn bg-primary mr-2 text-capitalize" onClick={handleDetails}>details</button>
                    <a href={source_url} className="btn bg-success ml-2 text-capitalize" target="_blank" rel="noopener noreferrer">recipe url</a>
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
