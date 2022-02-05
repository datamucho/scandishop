import React, { useState, Component} from 'react';
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import SingleProductQuery from '../utils/SingleProductQuery';
import Error from './Error'


class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <SingleProductQuery>
        {({data, loading, error})=>{
          if (loading) return <Loading />;
          if (error) return <Error />;
          const { product } = data;
          const { name, gallery, description, prices, category } = product; 

          return <section className='section product-section'>
          <h2 className='section-title'>{name}</h2>
          <div className='single-product'>
              <img src={gallery[0]}/>
            <div className='product-info'>
              <p>
                <span className='product-data'>name :</span> {name}
              </p>
              <p>
                <span className='product-data'>category :</span> {category} 
              </p>
              <p>
                <span className='product-data'>info :</span> <div dangerouslySetInnerHTML={{ __html: description }} />
              </p>
              <p>
                <span className='product-data'>price :</span> {prices[this.props.priceId].amount + prices[this.props.priceId].currency.symbol}
                
              </p>
              <button className='btn btn-primary' onClick={() => this.props.handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
            
          </div>
          
          <Link to='/' className='btn btn-primary back-btn'>
            back
          </Link>
        </section>;
        }}
      </SingleProductQuery>
    )
  }
}

export default SingleProduct;