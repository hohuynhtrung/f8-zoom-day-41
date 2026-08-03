import { useDispatch } from "react-redux";
import styles from "./ProductDetail.module.scss";
import { Link, useParams } from "react-router";

import {
  actions as productActions,
  useProductDetail,
} from "../../store/product";
import { useEffect } from "react";

function ProductDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = useProductDetail();

  useEffect(() => {
    if (slug) {
      dispatch(productActions.getDetail(slug));
    }
  }, [dispatch, slug]);

  if (!product) {
    return (
      <div className={styles.container}>
        <Link to="/products" className={styles.btnBack}>
          ← Back to Products
        </Link>
        <p className={styles.notFound}>Product not found</p>
      </div>
    );
  }

  const discountPercentage = Number(product.discountPercentage || 0);
  const discountedPrice = (
    product.price -
    (product.price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className={styles.container}>
      <Link to="/products" className={styles.btnBack}>
        ← Back to Products
      </Link>

      <div className={styles.card}>
        <div className={styles.imageSection}>
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
          />
        </div>

        <div className={styles.infoSection}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.brand}>Brand: {product.brand}</p>

          <div className={styles.priceRow}>
            <span className={styles.currentPrice}>${discountedPrice}</span>
            {product.discountPercentage > 0 && (
              <>
                <span className={styles.originalPrice}>${product.price}</span>
                <span className={styles.badge}>
                  -{product.discountPercentage}%
                </span>
              </>
            )}
          </div>

          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
