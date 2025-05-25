import { useContext } from "react";
import Product from "../../../../common/Product/Product";
import { displayProductContext } from "../../../../context/DisplayProductsContext";

function Nested2() {
  
  const { products } = useContext(displayProductContext);
  
  return (
    <div className="Nested2">
      <div className="container flex  ">
        <div className="row w-100 flex">
          <div className=" flex flex-wrap ">
            {products?.map(
              (ele, index) =>
                ele.category === "fruits" && <Product ele={ele} key={index} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nested2;
