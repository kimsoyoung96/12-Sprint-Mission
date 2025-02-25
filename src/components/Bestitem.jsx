import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import { getProductData } from "../api/api";
import styles from "./BestItem.module.css";

export default function Bestitem() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProductData({ orderBy: "favorite" });
        setItemList(products.list);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className={styles.bestItemsBox}>
      {itemList?.map((item) => (
        <ItemCard
          className={styles.item}
          item={item}
          key={`best-item-${item.id}`}
        />
      ))}
    </div>
  );
}
