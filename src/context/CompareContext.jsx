import { createContext, useState } from "react";
import toast from "react-hot-toast";
// eslint-disable-next-line react-refresh/only-export-components
export const compareContext = createContext();

export const CompareContextProvider = ({ children }) => {

const [proForComparison , setProForComparison ]=useState([])

  const AddToCompare=(ele)=>{
   const el = proForComparison.find(p => p.title===ele.title)
   if(!el){
    setProForComparison([...proForComparison,ele])
    toast.success(` ${ele?.title} add to compare page`);
  }}



  const RemoveFromCompare = (title) => {
   const arr = proForComparison.filter(p => p.title!==title )
   setProForComparison(arr)
  };

  return (
    <compareContext.Provider
      value={{ AddToCompare, proForComparison, RemoveFromCompare }}
    >
      {children}
    </compareContext.Provider>
  );
};