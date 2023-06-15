import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <>
      <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }} >Login Form </h1>
      </div>
      
      <form action="/action_page.php" method="post">
          <div class="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
          </div>

          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
                
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
          </div>

          <div class="container" style={{backgroundColor:"#f1f1f1", padding:'16px', margin:'0 101.5px', height:'100px'}}>
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
      </form>

    </>

  );
};

export default Login;