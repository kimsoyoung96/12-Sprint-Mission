import "./HomePageSection.css";

const HomePageSection = ({ image, alt, info, title, text, type }) => {
  return (
    <section className="section_container">
      <div className={`container ${type}`}>
        <img className="photo" src={image} alt={alt} />
        <div className="item_info">
          <span>{info}</span>
          <h2>{title}</h2>
          <div>{text}</div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
