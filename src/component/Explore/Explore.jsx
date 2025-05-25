import "./Explore.css";
import category from "../../assets/images/category.jpg";
import shap1 from "../../assets/images/svg/1.svg"
import shap2 from "../../assets/images/svg/2.svg";
import shap3 from "../../assets/images/svg/3.svg";
import shap4 from "../../assets/images/svg/4.svg";
import{Swiper , SwiperSlide} from 'swiper/react'
import { Autoplay, EffectCreative } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import {motion ,useInView ,useAnimation} from "framer-motion"
import { useEffect, useRef } from "react";


function Explore() {
  
  const ref = useRef(null)
  const isIninView = useInView(ref,{once:true})
  const animate = useAnimation()

  useEffect(()=>{
     
    if(isIninView){
      animate.start("visible");
      
    }

  },[isIninView ,animate])


  return (
    <section className="Explore">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="container-img  ">
              <img src={category} alt="" />
              <span>50% off</span>
            </div>
          </div>

          <div className="col-md-7">
            <div className="details">
              <p className="m-0 ">Explore Categories</p>

              <Swiper
                slidesPerView={1}
                breakpoints={{
                  576:{slidesPerView: 2 },
                  992: { slidesPerView: 4 },
                }}

                className="container-svg mt-5 "
                modules={[Autoplay, EffectCreative]}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                autoplay={{delay:2500}}
              
                loop={true}
                speed={500}
                ref={ref}
              >
                <SwiperSlide>
                  <motion.div
                    className="slide-cat flex-dir-col"
                    variants={{
                      hidden: { rotateY: 180 },
                      visible: { rotateY: 0 },
                    }}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <img src={shap1} width={70} alt="" />
                    <b>vegetables</b>
                    <p>485 items</p>
                  </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                  <motion.div
                    className="slide-cat two flex-dir-col"
                    variants={{
                      hidden: { rotateY: 180 },
                      visible: { rotateY: 0 },
                    }}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <img src={shap2} width={70} alt="" />
                    <b>fruits</b>
                    <p>690 items</p>
                  </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                  <motion.div
                    className="slide-cat three flex-dir-col"
                    variants={{
                      hidden: { rotateY: 180 },
                      visible: { rotateY: 0 },
                    }}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <img src={shap3} width={70} alt="" />
                    <b>cold drink</b>
                    <p>213 items</p>
                  </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                  <motion.div
                    className="slide-cat four flex-dir-col"
                    variants={{
                      hidden: { rotateY: 180 },
                      visible: { rotateY: 0 },
                    }}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1, delay: 1.1 }}
                  >
                    <img src={shap4} width={70} alt="" />
                    <b>bakary</b>
                    <p>300 items</p>
                  </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                  <motion.div
                    className="slide-cat two flex-dir-col"
                    variants={{
                      hidden: { rotateY: 180 },
                      visible: { rotateY: 0 },
                    }}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1, delay: 1.4 }}
                  >
                    <img src={shap2} width={70} alt="" />
                    <b>fruits</b>
                    <p>690 items</p>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
