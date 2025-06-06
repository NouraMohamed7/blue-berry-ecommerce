import "./Heading.css";
import Headinglogo1 from "../../assets/images/hero-1.png";
import Headinglogo2 from "../../assets/images/hero-2.png";
import Headinglogo3 from "../../assets/images/hero-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function Heading() {
  const navigate = useNavigate()
  return (
    <div className="Heading ">
      <Swiper
        className="container w-100"
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        autoplay={{ delay: 1500 }}
        
        speed={900}
      >
        <SwiperSlide className="slide">
          <div className="row">
            <div className="col-lg-6">
              <div className="headingDetails">
                <span>flat 30% off</span>
                <p className=" m-0">
                  explore <span>Healthy</span>
                  <br />& fresh fruits
                </p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => navigate("/categories")}
                >
                
                  Shop Now
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="w-100 p-5 flex  container-img ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                  <defs>
                    <filter
                      id="shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="6"
                        floodColor="#fff "
                        floodOpacity="0.5"
                      />
                    </filter>
                  </defs>
                  <path
                    d=""
                    stroke="#eee"
                    strokeWidth="1"
                    filter="url(#shadow)"
                  >
                    <animate
                      repeatCount="indefinite"
                      attributeName="d"
                      dur="10s"
                      values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                    ></animate>
                  </path>
                </svg>
                <img src={Headinglogo1} alt="" className="w-75" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="row">
            <div className="col-lg-6">
              <div className="headingDetails">
                <span>flat 30% off</span>
                <p className=" m-0">
                  explore <span>Warm</span>
                  <br />Fast Food & Snacks
                </p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => navigate("/categories")}
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="w-100 p-5 flex  container-img ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                  <defs>
                    <filter
                      id="shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="6"
                        floodColor="#fff "
                        floodOpacity="0.5"
                      />
                    </filter>
                  </defs>
                  <path
                    d=""
                    stroke="#eee"
                    strokeWidth="1"
                    filter="url(#shadow)"
                  >
                    <animate
                      repeatCount="indefinite"
                      attributeName="d"
                      dur="10s"
                      values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                    ></animate>
                  </path>
                </svg>
                <img src={Headinglogo2} alt="" className="w-75" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="row">
            <div className="col-lg-6">
              <div className="headingDetails">
                <span>flat 30% off</span>
                <p className=" m-0">
                  explore <span>Organic</span>
                  <br />& fresh Vegetables
                </p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => navigate("/categories")}
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="w-100 p-5 flex  container-img ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                  <defs>
                    <filter
                      id="shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="6"
                        floodColor="#fff "
                        floodOpacity="0.5"
                      />
                    </filter>
                  </defs>
                  <path
                    d=""
                    stroke="#eee"
                    strokeWidth="1"
                    filter="url(#shadow)"
                  >
                    <animate
                      repeatCount="indefinite"
                      attributeName="d"
                      dur="10s"
                      values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                    ></animate>
                  </path>
                </svg>
                <img src={Headinglogo3} alt="" className="w-75" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Heading;
