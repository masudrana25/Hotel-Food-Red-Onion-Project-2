import React from 'react';
import { data } from './../../Photo/images/data';
import BreakfastList from './BreakfastList';


const Breakfast = () => {
  const breakfast = data.filter(pd => pd.type === 'breakfast');
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Breakfast</h1>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {
        breakfast.map( item => <BreakfastList item = {item}></BreakfastList>)
      }
      </div>

    </div>
  );
};

export default Breakfast;