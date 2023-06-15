import React from 'react';
import { data } from './../../Photo/images/data';
import LunchList from './LunchList';

const Lunch = () => {
  const lunch = data.filter(pd => pd.type === 'lunch');
  console.log(lunch);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Lunch</h1>
      <div style={{display:'flex',flexWrap:'wrap'}}> 
        {
          lunch.map( pd => <LunchList item={pd}></LunchList>)
        }
      </div>
    </div>
  );
};

export default Lunch;