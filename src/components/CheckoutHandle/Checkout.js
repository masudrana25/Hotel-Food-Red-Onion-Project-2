import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div style={{ margin: '50px 10px 30px 105px' }}>
            <h4>Add/Edit Your Delivery Details </h4>
            <hr />
            <form action="">
               <label for="fname"></label>
                <input type="text" id="fname" name="firstname" placeholder="Your Division"/>

                <label for="lname"></label>
              <input type="text" id="lname" name="lastname" placeholder="Your District" />
              
              <label for="lname"></label>
              <input type="text" id="lname" name="lastname" placeholder="Your Phone Number" />
              
              <label for="lname"></label>
              <input type="text" id="lname" name="lastname" placeholder="Your Village Name" />
              
              <label for="lname"></label>
              <input type="text" id="lname" name="lastname" placeholder="Your House No." />
              
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div style={{margin:'50px 10px 30px 105px'}}>
          <h1>Your Delivery Details</h1>
          </div>
        </div>

      </div>
  </>
  );
};

export default Checkout;