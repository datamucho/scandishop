import React from 'react';
import Product from './Product';

class ProductListRender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const products = this.props.product;
        const category = this.props.category

        return <section className='section'>
          <h2 className='section-title'>Products</h2>
          <div className='product-center'>
             {data.categories[category].products.map((item) => {
              return <Product key={item.id} 
                              image={item.gallery[0]} 
                              amount={item.prices[this.props.priceId].amount} 
                              symbol={item.prices[this.props.priceId].currency.symbol}
                              {...item} />
            })} 
            </div>
            </section>;
    }
    
};

export default ProductListRender;
