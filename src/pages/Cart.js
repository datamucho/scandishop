import React from 'react';
import CartItem from '../components/CartItem'

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  return <div className="section">
      <div className="section-title">
        Cart Items:
        {this.props.cartItems.length === 0 && <div className="section-title">No items are added.</div>}
      </div>
      <div className='product-center'>
      
        {console.log(this.props.cartItems)}
      {this.props.cartItems.length !== 0 && this.props.cartItems.map((item) => {
          return <CartItem key={item.id}
          remove={this.props.remove} 
          image={item.gallery[0]} 
          amount={item.prices[this.props.priceId].amount} 
          symbol={item.prices[this.props.priceId].currency.symbol}
          {...item} />
          
        })}
        </div>

  </div>;

  }
};

export default Cart;
