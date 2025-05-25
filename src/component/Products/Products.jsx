/* eslint-disable no-unused-vars */
import "./Products.css";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { useRef, useEffect, useState, useContext } from "react";
import { motion, useInView, useAnimation, wrap } from "framer-motion";
import { LuLayoutGrid } from "react-icons/lu";
import { FaList } from "react-icons/fa6";

import shap1 from "../../assets/images/svg/1.svg";
import shap2 from "../../assets/images/svg/2.svg";
import shap3 from "../../assets/images/svg/3.svg";
import shap4 from "../../assets/images/svg/4.svg";

import Product from "../../common/Product/Product";
import { displayProductContext } from "../../context/DisplayProductsContext";
import { spacificCategory } from "../../common/ProductJson";
import { cartContext } from "../../context/CartContext";
import MyLoader from "../../common/skelton/ProductSkelton";

function Products() {
  const {
    products,
    handleDirection,
    flexDir,
    handelSortingData,
    sort,
    handelCategoryName,
    catName,
  } = useContext(displayProductContext);



  const { myCartTitles } = useContext(cartContext);


  const finallyProduct = products.map((pro) => {
    let obj_with_amount = myCartTitles.find(
      (el) => Object.keys(el)[0] == pro?.title
    );
    if( obj_with_amount){
      return {...pro , amount:obj_with_amount[pro?.title]}
    }else{
      return{...pro ,amount:0}
    }

  });
  

  console.log(finallyProduct)

  const filteredArr =
    catName.length === 0
      ? finallyProduct
      : finallyProduct.filter((pro) => catName.includes(pro.category));

  return (
    <div className="Products">
      <div className="pageHeading py-3">
        <div className="container flex justify-content-between">
          <b className="fs-5">All Products</b>
          <div className="flex gap-3">
            <span>Home</span>
            <FaArrowRight />
            <span>All Products</span>
          </div>
        </div>
      </div>

      <div className="container w-100">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 4 },
            992: { slidesPerView: 6 },
          }}
          className="container-svg mt-5 me-0"
          modules={[Autoplay, EffectCreative]}
          autoplay={{ delay: 1000 }}
          loop={true}
          speed={500}
        >
          {[shap1, shap2, shap3, shap4, shap1, shap2, shap3, shap4].map(
            (img, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`slide-cat flex-dir-col ${
                    ["", "two", "three", "four"][i % 4]
                  }`}
                >
                  <img src={img} width={70 + (i % 2 === 0 ? 10 : 0)} alt="" />
                  <b>
                    {["Vegetables", "fruits", "cold drink", "bakary"][i % 4]}
                  </b>
                  <p>{[485, 690, 213, 300][i % 4]} Items</p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="filter-categories">
              <div>
                <b>Main Categories</b>
                <div className="cont-filter d-flex flex-column gap-3 ms-3">
                  {spacificCategory.map((e, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={e.category}
                        onChange={handelCategoryName}
                        value={e.category}
                      />
                      <label htmlFor={e.category}>{e.category}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="sortContainer flex justify-content-between py-3 px-4">
              <div className="flex gap-2">
                <div
                  className={`flex-dir flex ${
                    flexDir === "row" ? "active" : ""
                  }`}
                  onClick={() => handleDirection("row")}
                >
                  <LuLayoutGrid />
                </div>
                <div
                  className={`flex-dir flex ${
                    flexDir === "col" ? "active" : ""
                  }`}
                  onClick={() => handleDirection("col")}
                >
                  <FaList />
                </div>
              </div>
              <div className="flex gap-2">
                <span style={{ whiteSpace: "nowrap" }}>Sort By:</span>
                <select
                  className="form-select py-1"
                  onChange={handelSortingData}
                  value={sort}
                >
                  <option value="Default">Default</option>
                  <option value="Name(A-Z)">Name(A-Z)</option>
                  <option value="Name(Z-A)">Name(Z-A)</option>
                  <option value="price(Heigh-Low)">price(Heigh-Low)</option>
                  <option value="price(Low-Heigh)">price(Low-Heigh)</option>
                </select>
              </div>
            </div>
            <div
              className={`products-container flex flex-wrap w-100 ${
                flexDir === "col" ? "change-dir" : ""
              }`}
            >
              {filteredArr ? (
                filteredArr.map((ele, index) => (
                  <Product ele={ele} key={index} />
                ))
              ) : (
                <MyLoader />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;



