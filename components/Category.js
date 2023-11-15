import { Component } from 'react'

class Category extends Component {
  render() {
    return(
      <div className="category">
        <p>{this.props.cName}</p>
      </div>
    )
  }
}

export default Category;