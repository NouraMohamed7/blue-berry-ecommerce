import './Footer.css'
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import footlogo from "../../assets/images/android.png";
import footlogo1 from "../../assets/images/apple.png";
import mainlogo from "../../assets/images/logo.png"


function Footer() {
  return (
    <footer className="text-center text-lg-start  ">
    
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4  col-xl-3 mx-auto mb-4">
              <div className="text-uppercase fw-bold mb-4">
                <img src={mainlogo} alt="" />
              </div>
              <p>
                BlueBerry is the biggest market of grocery products. Get your
                daily needs from our store.
              </p>
              <div className="flex-dir-col w-25 rounded  mx-auto gap-3">
                <img
                  src={footlogo}
                  alt=""
                  style={{ borderRadius: "12px", height: "55px" }}
                />
                <img
                  src={footlogo1}
                  alt=""
                  style={{ borderRadius: "12px", height: "55px" }}
                />
              </div>
            </div>

        
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Category</h6>
              <hr />
              <p>
                <a href="#" className="text-reset text-decoration-none">
                  Dairy & Milk
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Snack & Spice
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Fast Food
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Juice & Drinks
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Bakery
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Seafood
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <hr />
              <p>
                <a href="#!" className="text-reset text-decoration-none ">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none ">
                  Delivery
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Legal Notice
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  Terms & conditions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  Secure payment
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  Contact us
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Account</h6>
              <hr />
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  Sign In
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  View Cart
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  Return Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  Become a Vendor
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none ">
                  Affiliate Program
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset  text-decoration-none">
                  Payments
                </a>
              </p>
            </div>

          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <hr />
              <h4 />
              <p>
                <FaLocationDot className=" me-3" />
                Bravo Company
              </p>
              <p>
                <IoLogoWhatsapp className=" me-3" />
                01064031614
              </p>
              <p>
                <MdOutlineMail className=" me-3" />
                bravovoding.com
              </p>
              <p>
             
                <FaFacebookSquare className=" me-3 icon" />
                <FaSquareXTwitter className=" me-3 icon" />
                <FaSquareInstagram className=" me-3 icon" />
                <FaLinkedin className=" me-3 icon" />
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <div
        className="text-center p-4 m-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Copyright :
        <a
          className="text-reset  ms-3 fw-bold  text-decoration-none"
          href="https://mdbootstrap.com/"
        >
          {" "}
          (Bravo Company) all rights reserved.
        </a>
      </div>
    </footer>
  );
}

export default Footer;


