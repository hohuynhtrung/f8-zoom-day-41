import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { actions as productActions } from "../../store/product";
import { useProductList } from "../../store/product";
import styles from "./ProductList.module.scss";
import ProductCard from "../../components/ProductCard";

function ProductList() {
  const dispatch = useDispatch();
  const products = useProductList();

  useEffect(() => {
    dispatch(productActions.getList());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Products List</h1>
        <p className={styles.subtitle}>
          Showing <strong>{products.length}</strong> products
        </p>
      </header>

      {products.length === 0 ? (
        <div className={styles.empty}>No products</div>
      ) : (
        <div className={styles.grid}>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
