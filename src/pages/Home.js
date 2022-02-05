import React from 'react';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <main>
      <ProductList category={0} priceId={this.props.priceId}/>
    </main>;
  }
}

export default Home;
