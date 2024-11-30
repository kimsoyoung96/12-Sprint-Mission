import favorit_img from '../assets/heart_favorit.png';
import './BestItem.css';

const Bestitem = ({ items }) => {
  return (
    <div className="Bestitem">
      {items.map((item) => {
        return (
          <div>
            <div>{<img src={item.images} />}</div>
            <div>{item.name}</div>
            <div>{item.price}원</div>
            <div>
              <img src={favorit_img} />
              {item.favoriteCount}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bestitem;
