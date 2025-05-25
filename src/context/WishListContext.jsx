import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const wishListContext = createContext();

export const WishListContextProvider = ({ children }) => {
  const [proFavourite, setProFavourite] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishcart");
    if (stored) {
      try {
        setProFavourite(JSON.parse(stored));
      } catch {
        setProFavourite([]);
      }
    }
  }, []);

  const AddToWishlist = (ele) => {
    const favList = Array.isArray(proFavourite) ? proFavourite : [];

    let el = favList.find((p) => p.title === ele.title);

    if (!el) {
      const updated = [...favList, ele];
      setProFavourite(updated);
      toast.success(`${ele?.title} added to wishlist page`);
      localStorage.setItem("wishcart", JSON.stringify(updated));
    }
  };

  const RemoveFromCompare = (title) => {
    const arr = proFavourite.filter((p) => p.title !== title);
    setProFavourite(arr);
  };

  useEffect(() => {
    localStorage.setItem("wishcart", JSON.stringify(proFavourite));
  }, [proFavourite]);

  return (
    <wishListContext.Provider
      value={{ proFavourite, AddToWishlist, RemoveFromCompare }}
    >
      {children}
    </wishListContext.Provider>
  );
};
