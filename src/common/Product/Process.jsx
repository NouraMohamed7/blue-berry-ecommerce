// import React, { useContext } from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { BiShowAlt } from "react-icons/bi";
// import { IoGitCompareSharp } from "react-icons/io5";
// import { FaCartPlus } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { compareContext } from "../../context/CompareContext";
// import { cartContext } from "../../context/CartContext";

// function Process({ ele,max }) {
//   const navigate = useNavigate();
//   const { AddToCompare } = useContext(compareContext); 
//   const { AddToMyCart } = useContext(cartContext);

//   return (
//     <div className="product-icons">
//       <div>
//         <FaRegHeart />
//       </div>

//       <button onClick={() => navigate(`/productCategory/${ele.title}`)}>
//         <BiShowAlt />
//       </button>

//       <button onClick={() => AddToCompare(ele)}>
//         <IoGitCompareSharp />
//       </button>

//       <button onClick={() => AddToMyCart(ele.title)} disabled={max<=0}>
//         <FaCartPlus />
//       </button>
//     </div>
//   );
// }

// export default Process;


import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiShowAlt } from "react-icons/bi";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { compareContext } from "../../context/CompareContext";
import { cartContext } from "../../context/CartContext";
import { wishListContext } from "../../context/WishListContext";

function Process({ ele, max }) {
  const navigate = useNavigate();
  const { AddToCompare } = useContext(compareContext);
  const { AddToMyCart } = useContext(cartContext);
  const{AddToWishlist}=useContext(wishListContext)

  return (
    <div className="product-icons">
      <button onClick={() => AddToWishlist(ele)}>
        <FaRegHeart />
      </button>

      <button onClick={() => navigate(`/productCategory/${ele.title}`)}>
        <BiShowAlt />
      </button>

      <button onClick={() => AddToCompare(ele)}>
        <IoGitCompareSharp />
      </button>

      <button onClick={() => AddToMyCart(ele.title)} disabled={max <= 0}>
        <FaCartPlus />
      </button>
    </div>
  );
}

export default Process;
