import './Editsection.css';

const Editsection = ({ topChlid, center, bottonChild }) => {
  return (
    <div className="Editsection">
      <div className="edit_text">{topChlid}</div>
      <div className="edit_input">{center}</div>
      <div className="edit_tag">{bottonChild}</div>
    </div>
  );
};

export default Editsection;
