import './Itemtitle.css';

const Itemtitle = ({ leftChild, searchInput, searchBtn, rightChild }) => {
  return (
    <div className="Itemtitle">
      <div className="Item_text">{leftChild}</div>
      <div className="Item_input">{searchInput}</div>
      <div className="Item_button">{searchBtn}</div>
      <div className="Item_select">{rightChild}</div>
    </div>
  );
};

export default Itemtitle;
