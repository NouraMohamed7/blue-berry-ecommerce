import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { displayProductContext } from "./DisplayProductsContext";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { products } = useContext(displayProductContext);
  const [myCartTitles, setMyCartTitles] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setMyCartTitles(JSON.parse(localStorage.getItem("cart")));
    } else {
      setMyCartTitles([]);
    }
  }, []);

  const AddToMyCart = (title) => {
    let selectedPro = myCartTitles.find((ele) => Object.keys(ele)[0] == title);

    if (!selectedPro) {
      Swal.fire({
        title: `The ${title} add to your Cart `,
        icon: "success",
        showConfirmButton: false,
        timer: 1400,
      });

      let pro = { [title]: 1 };
      setMyCartTitles([...myCartTitles, pro]);
      localStorage.setItem("cart", JSON.stringify([...myCartTitles, pro]));
    } else {
      ++selectedPro[title];
      setMyCartTitles([...myCartTitles]);
      localStorage.setItem("cart", JSON.stringify([...myCartTitles]));
      toast.success(`Successfully add ${selectedPro[title]}`);
    }
  };


  const RemoveFromMyCart = (title) => {
    const updatedCart = [...myCartTitles];
    const itemIndex = updatedCart.findIndex(
      (item) => Object.keys(item)[0] === title
    );

    if (itemIndex === -1) return; 

    const currentItem = updatedCart[itemIndex];
    const currentAmount = currentItem[title];

    if (currentAmount > 1) {
      
      currentItem[title] = currentAmount - 1;
      setMyCartTitles(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success(`Remove of ${title} to ${currentItem[title]}`);
    } else {
      
      Swal.fire({
        title: `Are you sure you want to remove ${title}?`,
        text: "This is the last item in your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          updatedCart.splice(itemIndex, 1); 
          setMyCartTitles(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          Swal.fire("Deleted!", `${title} has been removed.`, "success");
        }
      });
    }
  };
  

  const HandelChangeAmount = (e, title) => {
    const val = +e.target.value;
    const findedobj = products.find((el) => el.title === title);
    let obj = myCartTitles.find((el) => Object.keys(el)[0] === title);
    obj[title] = val;

    setMyCartTitles([...myCartTitles]);
    localStorage.setItem("cart", JSON.stringify(myCartTitles));
    findedobj.amount = obj[title];
    console.log(findedobj);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(myCartTitles));
  }, [myCartTitles]);

  return (
    <cartContext.Provider
      value={{
        AddToMyCart,
        myCartTitles,
        RemoveFromMyCart,
        HandelChangeAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
