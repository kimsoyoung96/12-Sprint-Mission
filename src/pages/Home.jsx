import './Home.css';
import Nav_logo from '../assets/nav_panda_logo_img.png';
import Nav_user from '../assets/nav_user_img.png';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Bestitem from '../components/Bestitem';
import Totalitem from '../components/Totalitem';
import items from '../mockdata.json';
import totalitems from '../totalitems_data.json';
import Itemtitle from '../components/Itemtitle';

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
        <div className="item_title">
          <Itemtitle leftChild={'베스트 상품'} />
        </div>
        <Bestitem items={items} />
        <div className="item_title">
          <Itemtitle
            leftChild={'전체 상품'}
            searchInput={<input placeholder="검색할 상품을 입력해주세요" />}
            searchBtn={<Button text={'상품 등록하기'} type={'ItemAdd'} />}
            rightChild={
              <select>
                <option>최신순</option>
                <option>좋아요순</option>
              </select>
            }
          />
        </div>
        <Totalitem totalitems={totalitems} />
      </div>
    </div>
  );
};

export default Home;
