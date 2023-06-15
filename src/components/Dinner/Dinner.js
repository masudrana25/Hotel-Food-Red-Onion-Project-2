import React from 'react';
import { data } from './../../Photo/images/data';
import DinnerList from './DinnerList';

const Dinner = () => {
  const dinner = data.filter(pd => pd.type === 'dinner');

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Dinner</h1>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {
          dinner.map( pd => <DinnerList item={pd}></DinnerList>)
        }
      </div>
    </div>
  );
};

export default Dinner;