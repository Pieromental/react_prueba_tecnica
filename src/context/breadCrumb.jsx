import { createContext, useState } from "react";

export const BreadCrumbContext = createContext();

export const BreadCrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState("");

  const updateBreadCrumb = (name) => {
    setBreadcrumb(name);
  };

  return (
    <BreadCrumbContext.Provider value={{ breadcrumb, updateBreadCrumb }}>
      {children}
    </BreadCrumbContext.Provider>
  );
};