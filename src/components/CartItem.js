import React from 'react';
import { Link } from 'react-router-dom'


class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <article className='product'>
    <img className='img-container' src={this.props.image} alt={this.props.name} />
    <div className='product-footer'>
        <h3>{this.props.name}</h3>
        <h4 className='item-price'>${this.props.amount} {this.props.symbol}</h4>
        
        <Link to={`/products/${this.props.id}`} className='btn btn-primary btn-details'>
          details
        </Link>
        <button className='remove-btn' onClick={() => this.props.remove(this.props.id)}>
        remove
        </button>
    </div>
    </article>;
  }   
};

export default CartItem;
