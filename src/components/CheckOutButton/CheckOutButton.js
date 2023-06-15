import React from 'react';
import './CheckOutButton.css';
import { Link } from 'react-router-dom';

const CheckOutButton = () => {
  return (
    <>
      <br /><br />
    <div style={{display:'flex' , justifyContent:'center'}}>
      <Link to='/checkout'><button class="button button1"><h4>Checkout Your Food</h4> </button></Link>
      
    </div>
    <hr /><br />
    </>
  );
};

export default CheckOutButton;