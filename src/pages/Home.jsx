import './Home.css';
import Nav_logo from '../assets/nav_panda_logo_img.png';
import Nav_user from '../assets/nav_user_img.png';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Bestitem from '../components/Bestitem';
import Totalitem from '../components/Totalitem';
import items from '../mockdata.json';

const Home = () => {
  return (
    <div className="Home">
      <Nav
        leftChild={<img src={Nav_logo} />}
        center={
          <div className="nav_button">
            <Button text={'자유게시판'} />
            <Button text={'중고마켓'} />
          </div>
        }
        rightChild={<img src={Nav_user} />}
      />
      {/* 아래는 상품 */}
      <div className="item">
        <Bestitem items={items} />
        {/* <Totalitem /> */}
      </div>
    </div>
  );
};

export default Home;
