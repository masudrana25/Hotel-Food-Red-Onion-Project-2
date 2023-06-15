import React from 'react';
import './NavFood.css';
import { Link } from 'react-router-dom';

const NavFood = () => {
  return (
    <div className='aa'>
      <p>
        <Link to='/breakfast'>Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </p>
    </div>
  );
};

export default NavFood;