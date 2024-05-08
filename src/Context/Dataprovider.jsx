import { createContext, useState } from "react";

export const DataContext = createContext();

const Dataprovider = ({ children }) => {


  const [html, setHtml] = useState("");
  const [CSS, setCSS] = useState("");
  const [javascript, setJavascript] = useState("");



  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        CSS,
        setCSS,
        javascript,
        setJavascript,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
