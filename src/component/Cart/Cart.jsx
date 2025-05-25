import { FaArrowRight } from "react-icons/fa";
import { BiSolidCartDownload } from "react-icons/bi";
import "./Cart.css";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import UseCart from "../../hooks/UseCart";


function Cart() {
   const {
     cart_products,
     RemoveFromMyCart,
     HandelChangeAmount,
     myCartTitles,
     subTotall,
     t_after_disc,
   } = UseCart();



  return (
    <div className="Cart">
      <div className="pageHeading py-3 w-100">
        <div className="container flex justify-content-between">
          <b className="fs-5">Cart Page</b>
          <div className="flex gap-3">
            <span>Home</span> <FaArrowRight />
            <span>
              Cart <BiSolidCartDownload />
            </span>
          </div>
        </div>
      </div>

      <div className="container cart-container">
        <div className="row">
          <div className="col-lg-3">
            <div className="summary-box">
              <h5>Order Summary</h5>
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>${subTotall}</span>
              </div>
              <div className="summary-line">
                <span>Discount:</span>
                <span>5%</span>
              </div>
              <div className="summary-line">
                <span>Delivery:</span>
                <span>$10</span>
              </div>
              <div className="summary-line coupon">
                <span>Coupon:</span>
                <span>Click</span>
              </div>
              <div className="summary-total">
                <b>Total:</b>
                <b>${t_after_disc.toFixed(2)}</b>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="cart-items shadow-sm">
              <div className="cart-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>

              {myCartTitles.length ? (
                cart_products.map((e, index) => {
                  let option = Array(e?.count ?? e?.stock)
                    .fill(0)
                    .map((_, i) => {
                      let index = i + 1;
                      return (
                        <option value={index} key={i}>
                          {index}
                        </option>
                      );
                    });
                  return (
                    <div className="cart-row" key={index}>
                      <div className="product-info">
                        <img src={e?.img ?? e?.thumbnail} alt="Product" />
                        <b>{e?.title}</b>
                      </div>

                      <span>${e?.price}</span>
                      <div>
                        <select
                          className="form-select py-1"
                          value={e?.amount}
                          onChange={(event) =>
                            HandelChangeAmount(event, e?.title)
                          }
                        >
                          {option}
                        </select>
                      </div>
                      <span className="flex w-100 justify-content-between">
                        ${e?.price * e?.amount}
                        <span
                          className="fs-5"
                          style={{ cursor: "pointer" }}
                          onClick={() => RemoveFromMyCart(e?.title)}
                        >
                          <MdDeleteForever />
                        </span>
                      </span>
                    </div>
                  );
                })
              ) : (
                <div
                  className="fs-3  text-center flex-dir-col gap-4"
                  style={{ height: "500px", color: "var(--main-color) " }}
                >
                  There are no cards
                  <Link
                    to={"/products"}
                    className="fs-3 "
                    style={{ color: "var(--main-color) " }}
                  >
                    you can get some cards <IoBagAdd />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
