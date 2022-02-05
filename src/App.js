import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import Tech from './pages/Tech'
import Clothes from './pages/Clothes'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import React, { Component, Fragment, useState } from "react";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      priceId: 0
    }

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.remove = this.remove.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleAddToCart = (product) =>{
      this.setState({
        cartItems: [...this.state.cartItems, 
                   {...product, quantity: 1}]
      });
  }

   remove = (id) => {
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.id !== id
    )});
  }

  handleCurrencyChange = (event) =>{
    switch (event.value) {
      case '$':
        this.setState({
          priceId: 0
        });
        break;
      case '£':
        this.setState({
          priceId: 1
        });
        break;
      case 'A$':
        this.setState({
          priceId: 2
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          <Router>
            
            <Navbar handleCurrencyChange={this.handleCurrencyChange}/>
            <Routes >

              <Route exact path='/' element={<Home priceId={this.state.priceId}/>}/>

              <Route path='/tech' element={<Tech priceId={this.state.priceId}/>}/>
                
              <Route path='/clothes' element={<Clothes priceId={this.state.priceId}/>}/>

              <Route path='/cart' element={<Cart cartItems={this.state.cartItems} 
                                                 remove={this.remove}
                                                 priceId={this.state.priceId}/>}/>

              <Route path='/products/:id' element={<SingleProduct 
                                                    handleAddToCart={this.handleAddToCart}
                                                    priceId={this.state.priceId}/>}/>

              <Route path='*' element={<Error/>}/>

            </Routes>
            
          </Router>
        </div>);
  }
  
}
