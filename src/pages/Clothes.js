import React from 'react';
import ProductList from '../components/ProductList'

class Clothes extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <main>
      <ProductList category={1} priceId={this.props.priceId}/>
    </main>;
  }
}

export default Clothes;
