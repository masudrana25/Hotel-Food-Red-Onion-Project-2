import React from 'react';

const DinnerList = (props) => {
  const item = props.item;
  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '60px', borderRadius: '10px', height: '300px', width: '300px' }}>
      <p><img src={item.picture} alt="" height='150px' width='250px' /></p>
      <h4>{item.foodName}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default DinnerList;