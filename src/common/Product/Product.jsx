import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion"; 
import "./Product.css";
import Process from "./Process";
import "./../../component/Products/Products.css";

function Product({ ele, is_found_cat }) {
  const max = (ele?.count || ele?.stock || 0) - ele?.amount || 0;

  return (
    <motion.div
      className="container-card card my-3 mx-2 py-2 shadow rounded flex w-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container-card-img position-relative">
        <img
          src={ele?.img || ele?.thumbnail || ele?.images?.[0]}
          alt={ele?.title}
          className="product-image"
        />
        {!is_found_cat && <Process ele={ele} max={max} />}
      </div>

      <div className="container-card-details flex-dir-col px-2">
        <div className="flex justify-content-between w-100">
          <b>{ele?.category}</b>
          <div className="stars flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
        </div>
        <b>{ele?.title?.split(" ").slice(0, 2).join(" ")}</b>
        <div className="flex justify-content-between w-100 text-center">
          <p className="m-0">You Can Add {ele?.count || ele?.stock}</p>
          <span className="m-0">({max}) left</span>
        </div>
        <p>
          Price : <span> ${ele?.price} </span>
        </p>
      </div>
    </motion.div>
  );
}

export default Product;
