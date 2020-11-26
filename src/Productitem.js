import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './shoes.json';
import { Container } from '@material-ui/core';
import './App.css'

function Productitem() {
  const { id } = useParams();
  console.log(id)
  const shoe = Shoes[id];

  if (!shoe)
    return <h2>Sorry product not found!</h2>

  return (
    <Container className='containerItem'>
      <h3>Welcome to Product item {shoe.name}</h3>
      <div className="link">
        <img src={shoe.img} height={515} alt="Shoe" />
      </div>
    </Container>
  );
}

export default Productitem;