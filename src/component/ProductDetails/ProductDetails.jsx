import { FaArrowRight, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductDetails.css";
import { FaHandPointRight } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import { displayProductContext } from "../../context/DisplayProductsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import { cartContext } from "../../context/CartContext";
import { compareContext } from "../../context/CompareContext";

function ProductDetails() {

  let navigate = useNavigate()
  const { products, namesOfCategory } = useContext(displayProductContext);
  const {AddToMyCart}=useContext(cartContext)
  const {AddToCompare}=useContext(compareContext)
  const[detailsOfPro, setDetailsOfPro]=useState('')
  const [mainImage, setMainImage] = useState(null);
  const { title } = useParams();


 useEffect(()=>{
 
  const getObj = products.find( ele => ele.title ==title )

  if(getObj){
  setDetailsOfPro(getObj)
  }else{

    namesOfCategory.map(async (el) => {
      let { data } = await axios.get(el.url);
      let getOtherObj = data.products.find((e) => e.title === title);
      if (getOtherObj) {
        setDetailsOfPro(getOtherObj);
      }
    });

    
  setMainImage(null);

}
 },[title])




  const changeMainImage =(e)=>{
   setMainImage(e.target.src)
  }
  const originHaver =(e)=>{
    let ele = e.target;
    const p = window.event;
    ele.style.transformOrigin = `${p.offsetX}px ${p.offsetY}px`;
  }
 
  return (
    <div className="ProductDetails ">
      <div className="pageHeading py-3 w-100 mb-5">
        <div className="container flex justify-content-between">
          <b className="fs-5">Details Page</b>
          <div className="flex gap-3">
            <span>Home</span> <FaArrowRight />
           
            <span>details</span>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-lg-4">
            <div className="container-pro-img  shadow flex-dir-col gap-4 h-75 mt-4 ">
              <div className="mainImg" onMouseMove={originHaver}>
                <img
                  src={
                    mainImage ?? (detailsOfPro?.img || detailsOfPro?.thumbnail)
                  }
                  alt=""
                  className="w-100 h-100"
                />
              </div>

              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="imgs-view flex gap-2 w-100"
                loop={true}
              >
                {detailsOfPro?.images?.map((e, index) => (
                  <SwiperSlide>
                    <div key={index} style={{ cursor: "pointer" }}>
                      <img
                        src={e}
                        alt=""
                        width={100}
                        height={100}
                        onClick={changeMainImage}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="container-pro-details flex-dir-col gap-5 px-4">
              <div className="theCategory w-100 text-center fs-5">
                ( {detailsOfPro?.category})
              </div>
              <div className="theName w-100 ">
                <b>{detailsOfPro?.title}</b>
              </div>
              <div className="theRate w-100 flex justify-content-start  gap-4">
                <div className="stars flex gap-1 m-0 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <span>48 Rating</span>
              </div>
              <div className="theDiscription w-100">
                <p className="m-0">
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go. Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
              <div className="thePrice w-100 ">${detailsOfPro?.price}</div>
              <div className="theCompare w-100">
                <button
                  className="btn btn-success"
                  onClick={() => AddToCompare(detailsOfPro?.title)}
                >
                  Compare
                </button>{" "}
                -{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => navigate(`/wishlist`)}
                >
                  Wishlist
                </button>
              </div>

              <div className="theAddition w-100">
                <button
                  className="btn btn-primary w-50"
                  onClick={() => AddToMyCart(detailsOfPro?.title)}
                >
                  Add To Cart
                </button>
              </div>
              <div className="toTheCart w-100">
                <button className="btn" onClick={() => navigate("/cart")}>
                  <FaHandPointRight /> go to Cart Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
