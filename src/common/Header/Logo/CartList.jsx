import React from "react";
import "./Cartlist.css";
import { IoBagAdd, IoLockClosedSharp } from "react-icons/io5";
import UseCart from "../../../hooks/UseCart"; 
import { Link } from "react-router-dom";



function CartList({ showCart, handelShowCart }) {
  const {
    cart_products,
    RemoveFromMyCart,
    HandelChangeAmount,
    subTotall,
    t_after_disc,
  } = UseCart();

  return (
    <div className={`cartList ${showCart ? "active" : ""}`}>
      <div className="smallCartProducts container">
        <div className="row flex w-100">
          <div className="col-lg-12">
            <div className="mycart m-3 w-100 ">
              <b>- my cart -</b>

              {cart_products.length === 0 ? (
                <div
                  className="fs-4 text-center flex-dir-col gap-4"
                  style={{ height: "300px", color: "var(--main-color) " }}
                >
                  There are no cards
                  <Link
                    to={"/products"}
                    className="fs-4 "
                    style={{ color: "var(--main-color) " }}
                  >
                    you can get some cards <IoBagAdd />
                  </Link>
                </div>
              ) : (
                cart_products.map((product, index) => (
                  <div
                    key={index}
                    className="myCart1 border d-flex gap-4 p-3 rounded shadow-sm mb-3"
                  >
                    <img
                      src={product?.img ?? product?.thumbnail}
                      alt={product?.title}
                      className="product-img"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="d-flex flex justify-content-between flex-grow-1 ">
                      <div>
                        <b>{product?.title}</b>
                        <p className="m-0">
                          Price: <span>${product?.price?.toFixed(2)}</span>
                        </p>
                      </div>

                      <div className="d-flex align-items-center mt-1 gap-2">
                        <input
                          type="number"
                          value={product?.amount}
                          min={1}
                          className="form-control"
                          style={{ width: "60px" }}
                          onChange={(e) =>
                            HandelChangeAmount(e, product?.title)
                          }
                        />
                        <button
                          className="btn btn-sm btn-outline-danger w-max-content"
                          onClick={() => RemoveFromMyCart(product?.title)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* الفاتورة */}
              {cart_products.length > 0 && (
                <>
                  <hr />
                  <div className="total p-2">
                    <div className="d-flex justify-content-between px-2 small">
                      <p className="m-0">Subtotal:</p>
                      <span>{subTotall.toFixed(2)} EGP</span>
                    </div>
                    <div className="d-flex justify-content-between px-2 mt-2 small">
                      <p className="m-0">Discount (3%) + Delivery:</p>
                      <span>{(subTotall - t_after_disc).toFixed(2)} EGP</span>
                    </div>
                    <div className="d-flex justify-content-between px-2 mt-2 fw-bold">
                      <p className="m-0">Total:</p>
                      <span>{t_after_disc.toFixed(2)} EGP</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <IoLockClosedSharp className="closecartlist" onClick={handelShowCart} />
      </div>
    </div>
  );
}

export default CartList;
