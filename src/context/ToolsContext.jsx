
import { createContext, useState } from "react";

export const toolsContext = createContext();

export const ToolsContext = ({ children }) => {
    
    const [changed_color, set_changed_color] = useState("one");  
    const [changed_mode, set_changed_mode] = useState("light");  

    const handleChangeMainColor=(e , number)=>{
        set_changed_color(number)
    const element = e.target;
    const newColor =window.getComputedStyle(element).backgroundColor;
    document.documentElement.style.setProperty('--main-color' ,newColor)

    }
    const  handleChangeMode =(mode)=>{
      set_changed_mode(mode)
      if(mode==='dark'){
        document.documentElement.classList.add('dark')
      }else{
        
        document.documentElement.classList.remove("dark");
      }
    }


  return (
    <toolsContext.Provider
      value={{
        handleChangeMainColor,
        changed_color,
        handleChangeMode,
        changed_mode,
      }}
    >
      {children}
    </toolsContext.Provider>
  );
};
