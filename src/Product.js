import React from 'react'
import { Link } from 'react-router-dom';
import Shoes from './shoes.json';
import './App.css'

// const abc= Object.entries(Shoes);

// console.log(abc,'abc');

function Products() {
  return (
    <div>
      <h2>Welcome to Product</h2>
      <div className="productContainer">
        {Object.keys(Shoes).map(keyName => {
          const shoe = Shoes[keyName];
          return (
            <Link key={keyName}
              className="link"
              to={`/product/${keyName}`}>
              <h4> {shoe.name}</h4>
              <img src={shoe.img} height={150} alt="Shoe" />
            </Link>);
        })}
      </div>
    </div>
  )
}
export default Products