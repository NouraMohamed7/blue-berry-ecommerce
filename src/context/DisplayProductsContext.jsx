import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { allProducts ,spacificCategory } from "../common/ProductJson";

// eslint-disable-next-line react-refresh/only-export-components
export const displayProductContext = createContext();

export const DisplayProductContextProvider = ({ children }) => {


  let url = "https://dummyjson.com/products";
  let catUrl = "https://dummyjson.com/products/categories";

  const [products, setProducts] = useState([]);
  const [flexDir, setFlexDir] = useState("row");
  const [sort, setSort] = useState("Default");
  const [catName, setCatName] = useState([]);
  const [namesOfCategory, setNamesOfCategory] = useState([]);
  const [proOfCategory, setProOfCategory] = useState([]);
  


  const allData = async () => {
    let { data } = await axios.get(url);
    setProducts(allProducts.concat(data.products));
  
  };

  const NamesOfCategoryApi = async() => {
  let { data } = await axios.get(catUrl);
  setNamesOfCategory(data);
};

const ProductaOfCategoryApi = async (Api) => {
  let{data} = await axios.get(Api)
  setProOfCategory(data.products);

};

const ProductsOfCategoryJson = (index) => {
  let proJson = spacificCategory[index].products;
  setProOfCategory(proJson) 
};





  const handleDirection = (dir) => {
    setFlexDir(dir);
  };

  const handelSortingData =(e)=>{
    const val = e.target.value;

  switch (val) {
    case "Name(A-Z)":
      products.sort((pro) => (pro.title > pro.title ? 1 : -1));
      setProducts([...products]);
      setSort("Name(A-Z)");
      break;

    case "Name(Z-A)":

      products.sort((pro) => (pro.title < pro.title ? 1 : -1));
      setProducts([...products]);
      setSort('Name(Z-A)');
      break;

    case "price(Heigh-Low)":
      products.sort((a,b) => b.price-a.price );
      setProducts([...products]);
      setSort("price(Heigh-Low)");
      
      break;
    case"price(Low-Heigh)":
      products.sort((a,b) => a.price - b.price );
      setProducts([...products]);
      setSort("price(Low-Heigh)");
      break;
     default:
      allData(products);
      setSort("Default");
  }

  }

  const handelCategoryName =(e)=>{
    const { value, checked } = e.target;

     if(checked){
      setCatName([...catName,value])

     }else{

      let newarr=catName.filter((cat)=>cat!==value)
      setCatName(newarr)
      
     }
     console.log(catName);
  
  }






  useEffect(() => {
    allData();
    NamesOfCategoryApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <displayProductContext.Provider
      value={{
        products,
        flexDir,
        handleDirection,
        sort,
        handelSortingData,
        handelCategoryName,
        catName,
        namesOfCategory,
        ProductaOfCategoryApi,
        ProductsOfCategoryJson,
        proOfCategory,
      }}
    >
      {children}
    </displayProductContext.Provider>
  );
};
