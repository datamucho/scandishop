import React, { Component } from 'react';
import Loading from './Loading'
import Error from '../pages/Error';
import ProductListRender from './ProductListRender';
import QueryComponent from '../utils/ProductListQuery';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){

    const category = this.props.category;

    return (
      <QueryComponent>
        {({data, loading, error})=>{
          if (loading) return <Loading />;
          if (error) return <Error />;
          console.log(data);
          return <ProductListRender data={data} 
                                    category={category}   
                                    product={data.categories[category].products} 
                                    priceId={this.props.priceId}
                                    />;
        }}
      
      </QueryComponent>   
    )
  }
    
}

export default ProductList;