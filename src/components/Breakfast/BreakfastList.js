import React from 'react';

const BreakfastList = (props) => {
  const item = props.item;
  console.log(item);
  return (
    <div style={{border:'1px solid red', padding:'10px', margin:'60px', borderRadius:'10px',height:'250px', width:'300px'}}>
      <h4>{item.foodName}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default BreakfastList;