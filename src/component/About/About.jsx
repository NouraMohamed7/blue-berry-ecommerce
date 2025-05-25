import React from 'react';
import './About.css'
import imgAbout from "./../../assets/images/about.png";
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../../common/section-heading/SectionHeading';
import sevice_1 from './../../assets/images/services/1.png'
import sevice_2 from "./../../assets/images/services/2.png";
import sevice_3 from "./../../assets/images/services/3.png";
import sevice_4 from "./../../assets/images/services/4.png";
function About() {
  return (
    <div className="About">
      <div className="pageHeading py-3 w-100">
        <div className="container flex justify-content-between">
          <b className="fs-5">About Us</b>
          <div className="flex gap-3">
            <span>Home</span> <FaArrowRight />
            <span>About</span>
          </div>
        </div>
      </div>

      <div className="container-about ">
        <div className="row flex w-100 justify-content-between ">
          <div className="col-lg-6">
            <div className="img-about ">
              <img src={imgAbout} alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="details-about flex-dir-col gap-4 ">
              <h5>
                About the <span>BlueBerry</span>
              </h5>
              <b>Farm-fresh Goodness, just a click Away.</b>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde
                minima earum distinctio porro excepturi veritatis officiis
                dolorem quod. sapiente amet rerum beatae dignissimos aperiam id
                quae quia velit. Ab optio doloribus hic quas sit corporis
                numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde
                minima earum distinctio porro excepturi veritatis officiis
                dolorem quod. sapiente amet rerum beatae dignissimos aperiam id
                quae quia velit. Ab optio doloribus hic quas sit corporis
                numquam
              </p>
              <div className="boxs flex justify-content-around w-100">
                <div>
                  <span>200 +</span>
                  <p>vendors</p>
                </div>
                <div>
                  <span>654k +</span>
                  <p>vendors</p>
                </div>
                <div>
                  <span>587k +</span>
                  <p>vendors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services ">
          <SectionHeading
            title={"Our "}
            mainTitle={"Services"}
            description={
              "Customer service should not be a department. It should be the entire company."
            }
          />
          <div className="row flex w-100 justify-content-between">
            <div className="col-lg-3 flex-dir-col service">
              <img src={sevice_1} alt="" />
              <b>Free Shipping</b>
              <p>Free shipping on all Us order or above $200</p>
            </div>

            <div className="col-lg-3 flex-dir-col service">
              <img src={sevice_2} alt="" />
              <b>24x7 Support</b>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>

            <div className="col-lg-3 flex-dir-col service">
              <img src={sevice_3} alt="" />
              <b>30 Days Return</b>
              <p>Simply return it within 30 days for an exchange</p>
            </div>

            <div className="col-lg-3 flex-dir-col service">
              <img src={sevice_4} alt="" />
              <b>Payment Secure</b>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About