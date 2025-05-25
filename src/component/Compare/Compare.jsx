import { FaArrowRight } from "react-icons/fa";
import "./Compare.css";
import { useContext } from "react";
import { compareContext } from "../../context/CompareContext";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoBagAdd } from "react-icons/io5";

function Compare() {
  const { proForComparison, RemoveFromCompare } = useContext(compareContext);
  

  return (
    <div className="Compare">
      <div className="pageHeading py-3 w-100">
        <div className="container flex justify-content-between">
          <b className="fs-5">Compare Page</b>
          <div className="flex gap-3">
            <span>Home</span> <FaArrowRight />
            <span>Compare</span>
          </div>
        </div>
      </div>

      <div className="container-compare p-4">
        <div className="compare-wrapper">
          <div className="comHead">
            <div className="flex">
              Image <FaArrowRight />
            </div>
            <div>
              Name <FaArrowRight />
            </div>
            <div>
              Category <FaArrowRight />
            </div>
            <div>
              Rating <FaArrowRight />
            </div>
            <div>
              Stock <FaArrowRight />
            </div>
            <div>
              Price <FaArrowRight />
            </div>
            <div>
              Discount <FaArrowRight />
            </div>
            <div>
              Description <FaArrowRight />
            </div>
          </div>

          {proForComparison.length !== 0 ? (
            proForComparison.map((e, index) => (
              <div className="comparepro" key={index}>
                <div>
                  <img src={e.img ?? e.thumbnail} alt={e.title} />
                </div>
                <div>{e.title?.split(" ").slice(0, 2).join(" ")}</div>
                <div>{e.category}</div>
                <div>{e.rating}</div>
                <div>{e.stock ?? e.count}</div>
                <div>{e.price}</div>
                <div>
                  {e.discountPercentage ? e.discountPercentage : "No discount"}%
                </div>
                <div>
                  {(e.description?.trim()?.length
                    ? e.description
                    : e?.discription
                  )
                    ?.split(" ")
                    .slice(0, 8)
                    .join(" ")}
                  <br />{" "}
                  <span
                    className="fs-5 "
                    onClick={() => RemoveFromCompare(e.title)}
                  >
                    <TiDelete />
                  </span>
                </div>
              </div>
            ))
          ) : (

            <div
              className="fs-3  text-center ms-5 flex-dir-col gap-4"
              style={{ height: "500px", color: "var(--main-color) " }}
            >
              There are no cards to compare
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
  );
}

export default Compare;
