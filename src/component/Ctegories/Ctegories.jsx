import "./Ctegories.css";
import { FaArrowRight } from "react-icons/fa";
import one from "./../../assets/images/one.jpg";
import two from "./../../assets/images/two.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {spacificCategory} from './../../common/ProductJson'
import { useContext } from "react";
import { displayProductContext } from "../../context/DisplayProductsContext";
import { useNavigate } from "react-router-dom";

function Categories() {

  const {
    namesOfCategory,
    ProductsOfCategoryJson,
    ProductaOfCategoryApi,
  } = useContext(displayProductContext);
    console.log(namesOfCategory)
    const navigate = useNavigate();
    
   const  HandleProductsOfCategoryJson=(index)=>{
    ProductsOfCategoryJson(index);
    navigate("ProductsOfCategory");
   }
   const HandleProductsOfCategoryApi=(api)=>{
    ProductaOfCategoryApi(api);
    navigate("ProductsOfCategory");
   }


  return (
    <div className="Categories flex-dir-col">

      <div className="pageHeading py-3 w-100">
        <div className="container flex justify-content-between">
          <b className="fs-5">Shop Page</b>
          <div className="flex gap-3">
            <span>Home</span> <FaArrowRight />
            <span>Shop Page</span>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="containerCatSlider flex gap-5 m-5"
      >
        <SwiperSlide>
          <div className="slide">
            <img src={one} alt="" />
            <div className="overlay"></div>
            <b>
              Fresh <br /> vegetables
            </b>
            <span>50%</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={two} alt="" />
            <div className="overlay"></div>
            <b>
              Fresh & <br /> Healthy Fruit
            </b>
            <span>30%</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={one} alt="" />
            <div className="overlay"></div>
            <b>
              Fresh <br /> vegetables
            </b>
            <span>50%</span>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="container">
        <div className="row mb-5 g-5">
          <div className="col-lg-12">
            <div>
              <p className=" text-center h2"> .. All Categories ..</p>

              <div className="row g-4">
                {spacificCategory.map((el, index) => (
                  <div className="col-lg-3 col-md-4" key={index}>
                    <div
                      className="cat-name flex"
                      onClick={() => HandleProductsOfCategoryJson(index)}
                    >
                      <div>{el.category}</div>
                    </div>
                  </div>
                ))}

                {namesOfCategory?.map((el, index) => (
                  <div className="col-lg-3 col-md-4" key={index}>
                    <div
                      className="cat-name flex"
                      onClick={() => HandleProductsOfCategoryApi(el.url)
                        
                      }
                    >
                      <div>{el.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Categories;

