import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import './LogIn.css'

function LogIn() {
  return (
    <div className="LogIn">

      <div className="container">
        <h1 className="title"> User Login</h1>

        <form autoComplete="on">
         

        
          {/* Email */}
          <div className="box flex">
            
            <div className="iconBox">
              <MdMail />
            </div>
            <div className="fr">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="textBox"
                required
              />
            </div>
            <div className="clr" />
          </div>

          {/* Password */}
          <div className="box flex">
            
            <div className="iconBox">
              <RiLockPasswordFill  />
            </div>
            <div className="fr">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="textBox"
                required
              />
            </div>
            <div className="clr" />
          </div>

      
       

          {/* Submit */}
          <div className="box">
            <input type="submit" className="submit" value="LOGIN" />
          </div>
        </form>
      </div>
    </div>


  );
}

export default LogIn