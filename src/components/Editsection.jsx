import styles from "./Editsection.module.css";

const Editsection = ({ topChlid, center, bottonChild }) => {
  return (
    <div className={styles.Editsection}>
      <label className={styles.edit_text}>{topChlid}</label>
      <div className={styles.edit_input}>{center}</div>
      <div className={styles.edit_tag}>{bottonChild}</div>
    </div>
  );
};

export default Editsection;
