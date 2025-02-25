import styles from "./Itemtitle.module.css";

const Itemtitle = ({ leftChild, searchInput, searchBtn, rightChild }) => {
  return (
    <div className={styles.Itemtitle}>
      <div className={styles.Item_text}>{leftChild}</div>
      <div className={styles.Item_input}>{searchInput}</div>
      <div className={styles.Item_button}>{searchBtn}</div>
      <div className={styles.Item_select}>{rightChild}</div>
    </div>
  );
};

export default Itemtitle;
