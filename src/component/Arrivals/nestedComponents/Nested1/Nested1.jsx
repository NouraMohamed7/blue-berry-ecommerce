import { useContext } from "react";
import Product from "../../../../common/Product/Product";
import { displayProductContext } from "../../../../context/DisplayProductsContext";

function Nested1() {
  
  const { products } = useContext(displayProductContext);
  
  return (
    <div className="Nested1 ">
      <div className="container flex ">
        <div className="row w-100 flex">
          <div className=" flex w-100 flex-wrap ">
            {products?.map(
              (ele, index) =>
                ele.category === "snack & spices" && (
                  <Product ele={ele} key={index} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nested1;
