import { useContext } from "react";
import { BreadCrumbContext } from "../context/breadCrumb";

export const useBreadCrumb = () => {
  const context = useContext(BreadCrumbContext);
  if (context === undefined) {
    throw new Error("useBreadcrumb debe ser usado dentro de un BreadcrumbProvider");
  }
  return context;
};