import { Link } from "react-router";
import styles from "./ProductCard.module.scss";

function ProductCard({ product }) {
  const productSlug = product.slug || product.id;
  const discountPercentage = Number(product.discountPercentage || 0);
  const discountedPrice = (
    product.price -
    (product.price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <Link to={`/products/${productSlug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className={styles.thumbnail}
        />
        {discountPercentage > 0 && (
          <span className={styles.badgeDiscount}>-{discountPercentage}%</span>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title} title={product.title}>
          {product.title}
        </h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceRow}>
          <span className={styles.currentPrice}>${discountedPrice}</span>
          {discountPercentage > 0 && (
            <span className={styles.originalPrice}>${product.price}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
