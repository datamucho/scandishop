import React from 'react'
import { Link } from 'react-router-dom'

export default class Product extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {

  return (
    <article className='product'>
      <div className='img-container'>
        <img src={this.props.image} alt={this.props.name} />
      </div>
      <div className='product-footer'>
        <h2>{this.props.name}</h2>
        <p>{this.props.info}</p>
        <Link to={`/products/${this.props.id}`} className='btn btn-primary btn-details'>
          details
        </Link>
        <h4>Price: {this.props.amount} {this.props.symbol}</h4>
      </div> 
    </article>
  )      
}
}
