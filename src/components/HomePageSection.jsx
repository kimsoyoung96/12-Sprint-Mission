import styles from "./HomePageSection.module.css";

const HomePageSection = ({ image, alt, info, title, text, type }) => {
  return (
    <section className={styles.section_container}>
      <div className={`${styles.container} ${styles.type}`}>
        <img className={styles.photo} src={image} alt={alt} />
        <div className={styles.item_info}>
          <span>{info}</span>
          <h2>{title}</h2>
          <div>{text}</div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
