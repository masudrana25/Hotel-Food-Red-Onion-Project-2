import React from 'react';
import pic from '../../Photo/images/logo2.png';
import './SignUp.css';
const SignUp = () => {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><img src={pic} alt="" height='70' />
      </div>
      <div>
        <form action="/action_page.php" style={{border:'1px solid #ccc"'}}>
          <div className='container'>
            <h1 style={{ display: 'flex', justifyContent: 'center' }} >Sign Up </h1>
            <p>Please fill in this form to create an account.</p>

            <hr />
            
            <label for="email"> <b>Email</b> </label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

            <label>
              <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}} />
              Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}> Terms & Privacy</a>.</p>
            
            <div class="clearfix">
              <button type="button" class="cancelbtn">Cancel</button>
              <button type="submit" class="signupbtn">Sign Up</button>
            </div>

          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;