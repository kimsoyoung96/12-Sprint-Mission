import styles from "./Totalitem.module.css";
import favorit_img from "../assets/heart_favorit.png";

const Totalitem = ({ totalitems }) => {
  return (
    <div className={styles.Totalitems}>
      {totalitems.map((item) => {
        return (
          <div className={styles.TotaliemContainer}>
            <div className={styles.itemImg}>{<img src={item.images} />}</div>
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.itemPrice}>
              {item.price.toLocaleString()}원
            </div>
            <div className={styles.itemTotal}>
              <img src={favorit_img} />
              {item.favoriteCount}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Totalitem;
