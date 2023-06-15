import React from 'react';
import './CheckOutButton.css';
import { Link } from 'react-router-dom';

const CheckOutButton = () => {
  return (
    <div style={{display:'flex' , justifyContent:'center'}}>
      <Link to='/checkout'><button  class="button button1"><h4>Checkout Your Food</h4> </button></Link>
    </div>
  );
};

export default CheckOutButton;