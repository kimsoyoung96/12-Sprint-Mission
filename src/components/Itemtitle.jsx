import './Itemtitle.css';

const Itemtitle = ({ leftChild, center, rightChild }) => {
  return (
    <div className="Itemtitle">
      <div className="Item_text">{leftChild}</div>
      <div className="Item_search">{center}</div>
      <div className="Item_select">{rightChild}</div>
    </div>
  );
};

export default Itemtitle;
