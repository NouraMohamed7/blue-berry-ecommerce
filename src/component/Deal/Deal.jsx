import "./Deal.css";
import { useContext, useEffect, useRef } from "react";
import SectionHeading from "../../common/section-heading/SectionHeading";
import Product from "./../../common/Product/Product";
import testImg from "./../../assets/images/fast-food/one.png";
import test2Img from "./../../assets/images/fast-food/two.png";
import bannar from "./../../assets/images/banner.jpg";
import { displayProductContext } from "../../context/DisplayProductsContext";
import { useNavigate } from "react-router-dom";

function Deal() {
  
  const deadline = new Date("Dec 31, 2025 23:59:59").getTime();

  const refDays = useRef();
  const refHours = useRef();
  const refMinutes = useRef();
  const refSeconds = useRef();


  const { products } = useContext(displayProductContext);

  
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = deadline - now;

    
      if (timeLeft <= 0) {
        refDays.current.innerHTML = "0";
        refHours.current.innerHTML = "0";
        refMinutes.current.innerHTML = "0";
        refSeconds.current.innerHTML = "0";
        return;
      }

     
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  
      refDays.current.innerHTML = days;
      refHours.current.innerHTML = hours;
      refMinutes.current.innerHTML = minutes;
      refSeconds.current.innerHTML = seconds;
    };


    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

  
    return () => clearInterval(interval);
  }, [deadline]);


  const navigate = useNavigate();

  return (
    <div className="Deal">
      <div className="container">
     
        <SectionHeading
        className='hsec'
          title={"Day of the"}
          mainTitle={"Deal"}
          description={"Don't wait. The time will never be just right."}
        >
        
          <div className="countDown shadow flex justify-content-between">
            <span className="m-2">
              <span ref={refDays}></span> Days Left :
            </span>
            (
            <span ref={refHours} className="hours">
              00
            </span>{" "}
            :
            <span ref={refMinutes} className="min">
              00
            </span>{" "}
            :
            <span ref={refSeconds} className="sec">
              00
            </span>
            )
          </div>
        </SectionHeading>


        <div className="flex flex-wrap">
          {products?.slice(0, 3).map((ele, index) => (
            <Product key={index} ele={ele} />
          ))}
        </div>

       
        <div className="testy mb-5">
          <div className="container flex">
            <div className="row">
              <div className="testy1 col-lg-5 border flex m-auto">
                <div className="imgTesty flex-dir-col">
                  <img src={testImg} alt=""  />
                </div>
                <div className="detailTesty flex-dir-col gap-3">
                  <b>Tasty Snack & Fast food</b>
                  <p>The flavour of something special</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/categories")}
                  >
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="testy2 col-5 border flex m-auto">
                <div className="imgTesty flex-dir-col">
                  <img src={test2Img} alt=""  />
                </div>
                <div className="detailTesty flex-dir-col gap-3">
                  <b>Tasty Snack & Fast food</b>
                  <p>The flavour of something special</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/categories")}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <img src={bannar} alt="Banner" style={{ width: "100%", padding: 0 }} />
      </div>
    </div>
  );
}

export default Deal;
