import SectionHeading from "../../common/section-heading/SectionHeading";
import "./Vendors.css";
import vendor4  from './../../assets/images/vendors/vendor-4.jpg'
import faq4 from "./../../assets/images/vendors/img-4.jpg";

import vendor1 from "./../../assets/images/vendors/vendor-1.jpg";
import faq1 from "./../../assets/images/vendors/img-1.jpg";

import vendor2 from "./../../assets/images/vendors/vendor-2.jpg";
import faq2 from "./../../assets/images/vendors/img-2.jpg";

import vendor3 from "./../../assets/images/vendors/vendor-3.jpg";
import faq3 from "./../../assets/images/vendors/img-3.jpg";
import { useState } from "react";

function Vendors() {
  let[changeImg, setChangImg] = useState('card1');

  function hundleImge(x) {
    setChangImg(x);
    console.log(x);
  }

  return (
    <section className="Vendors">
      <div className="container">
        <SectionHeading
          title={"Top "}
          mainTitle={"Vendors"}
          description={
            "Discover Our Trusted Partners: Excllence & Reliability in Every choice"
          }
        />
      </div>

      <div className="row flex ">
        <div className="col-lg-5">
          <div className="container-img  flex  ms-5">
            <div
              onClick={() => hundleImge("card1")}
              className={`${changeImg === "card1" && "show"} single-img  `}
            >
              <img src={faq1} alt="" />
              <div
                className="position-fixed  Left-100 w-25 h-25 "
                style={{ zIndex: "19999", left: "76%", bottom: "-2%" }}
              >
                <img src={vendor1} alt="" />
              </div>
            </div>

            <div
              onClick={() => hundleImge("card2")}
              className={`${changeImg === "card2" && "show"} single-img `}
            >
              <img src={faq2} alt="" />
              <div
                className="position-fixed  Left-100 w-25 h-25 "
                style={{ zIndex: "19999", left: "76%", bottom: "-2%" }}
              >
                <img src={vendor2} alt="" />
              </div>
            </div>

            <div
              onClick={() => hundleImge("card3")}
              className={`${changeImg === "card3" && "show"} single-img  `}
            >
              <img src={faq3} alt="" />
              <div
                className="position-fixed  Left-100 w-25 h-25 "
                style={{ zIndex: "19999", left: "76%", bottom: "-2%" }}
              >
                <img src={vendor3} alt="" />
              </div>
            </div>

            <div
              onClick={() => hundleImge("card4")}
              className={`${changeImg === "card4" && "show"} single-img  `}
            >
              <img src={faq4} alt="" />
              <div
                className="position-fixed  Left-100 w-25 h-25 "
                style={{ zIndex: "19999", left: "76%", bottom: "-2%" }}
              >
                <img src={vendor4} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="container-vendor d-flex flex-column gap-3">
            <div
              onClick={() => hundleImge("card1")}
              className={`
                 ${changeImg === "card1" && "active"} 
              vendor-select1 flex justify-content-between `}
            >
              <div>
                <b>Mira Fashion Pvt. Ltd.</b>
                <span>Sales - 587</span>
              </div>
              <p>Fruits (5) | Vegetables (30) | Snacks (09)</p>
            </div>

            <div
              onClick={() => hundleImge("card2")}
              className={` ${
                changeImg === "card2" && "active"
              } vendor-select1 `}
            >
              <div>
                <b>Eelna Fashion Pvt. Ltd.</b>
                <span>Sales - 587</span>
              </div>
              <p>Fruits (5) | Vegetables (30) | Snacks (09)</p>
            </div>

            <div
              onClick={() => hundleImge("card3")}
              className={`${changeImg === "card3" && "active"}  vendor-select1`}
            >
              <div>
                <b>Mario Fashion Pvt. Ltd.</b>
                <span>Sales - 587</span>
              </div>
              <p>Fruits (5) | Vegetables (30) | Snacks (09)</p>
            </div>

            <div
              onClick={() => hundleImge("card4")}
              className={`${
                changeImg === "card4" && "active"
              }  vendor-select1 `}
            >
              <div>
                <b>Ali Fashion Pvt. Ltd.</b>
                <span>Sales - 587</span>
              </div>
              <p>Fruits (5) | Vegetables (30) | Snacks (09)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vendors;
