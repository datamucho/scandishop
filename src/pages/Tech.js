import React from 'react';
import ProductList from '../components/ProductList'

class Tech extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <main>
      <ProductList category={2} priceId={this.props.priceId}/>
    </main>;
  }
}

export default Tech;
