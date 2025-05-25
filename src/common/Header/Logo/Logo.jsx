import "./Logo.css";
import LogoImg from "../../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import FramerMotionStagger from "../../../hooks/FramerMotionStagger";
// eslint-disable-next-line no-unused-vars
import { color, motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import CartList from "./CartList";
import { spacificCategory } from "../../ProductJson";
import { displayProductContext } from "../../../context/DisplayProductsContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Logo() {
  const navigat=useNavigate()
  const { useMenuAnimation } = FramerMotionStagger();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const refbtn = useRef();
  const [showCart,setShowCart]=useState(false);

  const handelShowCart=()=>{
    setShowCart(!showCart);
  }




  const { namesOfCategory } = useContext(displayProductContext);
  const [selected_category , setSelected_category]=useState(null)
  const [search_val ,setSearch_val]=useState('')
  const[open_search , setOpen_search]=useState(false)

  const handleGetProductOfJsonCategory = (e) => {
    const val = e.target.innerText;
    refbtn.current.innerText = val;
    setIsOpen(false);
    setOpen_search(true);
    setSearch_val('')

    let finded_obj = spacificCategory.find((el) => el.category === val);
    setSelected_category(finded_obj);
  };
  
  const handleGetProductOfApiCategory = async(e) => {
    const val = e.name;
    refbtn.current.innerText = val;
    setIsOpen(false);
    setOpen_search(true);
    setSearch_val("");


    let {data}=await axios.get(e.url)
    setSelected_category({ products: data.products });
  };
  
  let filtered_cat = selected_category && search_val!==''? selected_category.products.filter((el)=>(
    el.title.toLowerCase().includes(search_val.toLowerCase())
  )) :[]


  return (
    <div className="Logo py-4 flex-dir-col gap-4" ref={scope}>
      <div className="container flex  justify-content-between  ">
        <div className="me-4">
          <img src={LogoImg} alt="" />
        </div>

        <div className="container-search flex me-4">
          <div className="customSelect">
            <motion.div
              className="select-button flex justify-content-between px-3"
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{ background: isOpen ? "#ddd" : "" }}
            >
              <span ref={refbtn}> choose category </span>
              <FaChevronUp className="arrow" />
            </motion.div>
            <div className="select-option">
              {spacificCategory?.map((ele, index) => (
                <p
                  key={index}
                  onClick={handleGetProductOfJsonCategory}
                  className="m-0"
                >
                  {ele?.category}
                </p>
              ))}
              {namesOfCategory?.map((el, index) => (
                <p
                  key={index}
                  onClick={() => handleGetProductOfApiCategory(el)}
                  className="m-0"
                >
                  {el?.name}
                </p>
              ))}
            </div>
          </div>

          <div className="container-search-input ">
            <input
              type="text"
              value={search_val}
              onChange={(e) => setSearch_val(e?.target.value)}
              placeholder="search in your products"
            />
            <FaSearch className="search-icon" />
            <div className="search_result shadow">
              {open_search &&
                filtered_cat.map((el, index) => (
                  <Link
                    to={`productCategory/${el?.title}`}
                    key={index}
                    onClick={() => {
                      setOpen_search(false);
                      setSearch_val(el?.title);
                    }}
                  >
                    {el?.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="process flex gap-4 ">
          <div className="data auth flex gap-2 position-relative ">
            <LuUserRound className="data-icons" />
            <div>
              <p className="m-0">Acount</p>
              <b>login</b>
            </div>

            <div className="dropDown-menu">
              <p onClick={() => navigat("signup")}>Register</p>
              <p onClick={() => navigat("login")}>Login</p>
            </div>
          </div>

          <div
            className="data wishlist flex gap-2"
            onClick={() => navigat("wishlist")}
          >
            <FaRegStar className="data-icons" />
            <div>
              <p className="m-0">item/s</p>
              <b>wishlist</b>
            </div>
          </div>

          <div className="data cart flex gap-2 ">
            <div className="flex gap-2" onClick={handelShowCart}>
              <AiOutlineShoppingCart className="data-icons " />
              <div>
                <p className="m-0"> item/s </p>
                <b>cart</b>
              </div>
            </div>
            <CartList showCart={showCart} handelShowCart={handelShowCart} />
            <div
              onClick={handelShowCart}
              className={`dropfilter ${showCart ? "active" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
