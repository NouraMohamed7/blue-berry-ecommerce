import "./Wishlist.css";
import { MdFavorite } from "react-icons/md";
import { useContext } from "react";
import { wishListContext } from "../../context/WishListContext";
import { IoBagAdd } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate=useNavigate()
  const{proFavourite,RemoveFromCompare}=useContext(wishListContext)
  
  return (
    <div className="Wishlist">
      <div className="pageHeading py-3 w-100">
        <div className="container flex">
          <div className="flex gap-2 fs-4">
            <span>REVIEW OF</span>
            <span>WISHLIST</span>
          </div>
        </div>
      </div>

      <div className="container-wishlist">
        {proFavourite?.length !== 0 ? (
          proFavourite?.map((e, index) => (
            <div className="card-wish" key={index}>
              <div className="img-wish h-100">
                <img
                  src={e?.img ?? e?.thumbnail}
                  alt="product"
                  className="w-100 h-100"
                />
                <MdFavorite
                  className="love"
                  onClick={() => RemoveFromCompare(e?.title)}
                />
              </div>
              <div className="details-wish flex-dir-col gap-2 my-3">
                <b>{e?.title?.split(" ").slice(0, 2).join(" ")}</b>
                <span>
                  Price : <span>${e?.price}</span>
                </span>
                <button
                  className="btn w-100"
                  onClick={() => navigate(`/productCategory/${e?.title}`)}
                >
                  view more details...
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            className="fs-3  text-center ms-5 flex-dir-col gap-4"
            style={{ height: "500px", color: "var(--main-color) " }}
          >
            There are no cards
            <Link
              to={"/products"}
              className="fs-3 "
              style={{ color: "var(--main-color) " }}
            >
              you can show some cards <IoBagAdd />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
