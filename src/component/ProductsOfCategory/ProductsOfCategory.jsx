import { FaArrowRight } from 'react-icons/fa';
import './ProductsOfCategory.css'
import { useContext, useEffect } from 'react';
import { displayProductContext } from '../../context/DisplayProductsContext';
import { LuLayoutGrid } from "react-icons/lu";
import { FaList } from "react-icons/fa6";
import Product from '../../common/Product/Product';
import { useNavigate ,useLocation } from 'react-router-dom';

function ProductsOfCategory() {
  
  const{pathname}=useLocation()
  const is_found_cat =pathname.includes('categories')
 
  const {
    handleDirection,
    flexDir,
    proOfCategory,
  } = useContext(displayProductContext);
  
 const navigate = useNavigate()
  useEffect(()=>{
    proOfCategory.length === 0 && navigate("/categories");
  },[navigate , proOfCategory])

 
   
  return (
    <div className="ProductsOfCategory flex-dir-col px-4">
      <div className="pageHeading py-3 w-100">
        <div className="container flex justify-content-between">
          <b className="fs-5">All Products</b>
          <div className="flex gap-3">
            <span>
              Home <FaArrowRight />
            </span><span>products</span>
            
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="sortContainer flex  py-3 px-4">
          <div className="flex gap-5">
            <div
              className={`flex-dir flex ${flexDir === "row" ? "active" : ""}`}
              onClick={() => handleDirection("row")}
            >
              <LuLayoutGrid />
            </div>
            <div
              className={`flex-dir flex ${flexDir === "col" ? "active" : ""}`}
              onClick={() => handleDirection("col")}
            >
              <FaList />
            </div>
          </div>
        </div>

        <div
          className={`products-container flex flex-wrap w-100 ${
            flexDir == "col" ? "change-dir" : ""
          }
           `}
        >
          {proOfCategory?.map((ele, index) => (
            <Product ele={ele} key={index} is_found_cat={is_found_cat} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsOfCategory