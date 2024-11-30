import './Totalitem.css';
import favorit_img from '../assets/heart_favorit.png';

const Totalitem = ({ totalitems }) => {
  return (
    <div className="Totalitems">
      {totalitems.map((item) => {
        return (
          <div className="TotaliemContainer">
            <div className="itemImg">{<img src={item.images} />}</div>
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">{item.price.toLocaleString()}원</div>
            <div className="itemTotal">
              <img src={favorit_img} />
              {item.favoritCount}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Totalitem;
