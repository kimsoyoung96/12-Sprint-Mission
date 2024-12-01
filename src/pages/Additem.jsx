import './Additem.css';
import Nav from '../components/Nav';
import Nav_logo from '../assets/nav_panda_logo_img.png';
import Nav_user from '../assets/nav_user_img.png';
import Button from '../components/Button';
import Itemtitle from '../components/Itemtitle';

const Additem = () => {
  return (
    <div className="Additem">
      <Nav
        leftChild={<img src={Nav_logo} />}
        center={
          <div className="nav_button">
            <Button text={'자유게시판'} />
            <Button text={'중고마켓'} type={'nav_activate'} />
          </div>
        }
        rightChild={<img src={Nav_user} />}
      />
      {/* 아래는 상품등록 페이지 구현 */}
      <div className="edit">
        <div className="edit_title">
          <Itemtitle
            leftChild={'상품 등록하기'}
            rightChild={<Button text={'등록'} type={'register'} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Additem;
