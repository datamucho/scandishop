import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpeg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const options = [
      "$", "£", "A$"
    ];

    const defaultOption = options[0];
    
    return <nav className="navbar">
      <div className="nav-center">
        <Link to='/'>
          <img alt="scandishop logo" className="logo" src={logo}/>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
        <Link to='/'>
          All
        </Link>
        </li>
        <li>
        <Link to='/tech'>
          Tech
        </Link>
        </li>
        <li>
        <Link to='/clothes'>
          Clothes
        </Link>
        </li>

        <li>
        <Link to='/cart'>
          <img className='cart-img' 
              src='https://cdn-icons-png.flaticon.com/512/263/263142.png'
              />
        </Link>
        </li>
        <li>
          <Dropdown options={options} onChange={(event) => this.props.handleCurrencyChange(event)} value={defaultOption} placeholder="Change Currency" />
        </li>
      </ul>
    </nav>;
  }
}

export default Navbar;
