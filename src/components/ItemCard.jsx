import React from "react";
import { ReactComponent as HeartIcon } from "../assets/favorite.svg";
import noImage from "../assets/no-image.png";
import styles from "./ItemCard.module.css";

function ItemCard({ className, item }) {
  const thumbnailUrl = "https://example.com/...";

  return (
    <div className={className}>
      <img
        src={
          item.images.some((image) => image === thumbnailUrl)
            ? noImage
            : item.images[0]
        }
        alt={item.name}
        className={styles.itemImg}
      />
      <div className="itemSummary">
        <h2 className={styles.itemName}>{item.name}</h2>
        <p className={styles.itemPrice}>{item.price.toLocaleString()}원</p>
        <div className={styles.favorite}>
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
