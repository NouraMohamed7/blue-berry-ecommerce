import React from "react";
import "./SignUp.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function SignUp() {
  return (
    <div className="SignUp">
      <div className="container my-5">
        <h1 className="title">Registration</h1>

        <form autoComplete="on">
         
          <div className="box flex">
           
            <div className="iconBox">
              <FaUserAlt />
            </div>
            <div className="fr">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="textBox"
                autoFocus
                required
              />
            </div>
            <div className="clr" />
          </div>

          {/* Last Name */}
          <div className="box flex">
            
            <div className="iconBox">
              <FaUserAlt />
            </div>
            <div className="fr">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="textBox"
                required
              />
            </div>
            <div className="clr" />
          </div>

          {/* Phone */}
          <div className="box flex ">
           
            <div className="iconBox">
              <FaPhone />
            </div>
            <div className="fr">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="textBox"
                maxLength="10"
                required
              />
            </div>
            <div className="clr" />
          </div>

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
                placeholder="plz, enter complex Password"
                className="textBox"
                required
              />
            </div>
            <div className="clr" />
          </div>

          {/* Gender */}
          <div className="box radio flex">
            <div className="fr">
              <input type="radio" name="gender" value="Male" required /> Male
              &nbsp;
              <input type="radio" name="gender" value="Female" required />
              Female
            </div>
            <div className="clr" />
          </div>

          {/* Terms */}
          <div className="box terms flex">
            <input type="checkbox" name="terms" required /> &nbsp; I accept the
            terms and conditions
          </div>

          {/* Submit */}
          <div className="box">
            <input type="submit" className="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
