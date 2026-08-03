import { useSelector } from "react-redux";
import { getProductDetail, getProducts } from "./selectors";

export const useProductList = () => {
  const products = useSelector(getProducts);
  return products;
};

export const useProductDetail = () => {
  const productDetail = useSelector(getProductDetail);
  return productDetail;
};
