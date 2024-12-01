import './Additem.css';
import Nav from '../components/Nav';
import Nav_logo from '../assets/nav_panda_logo_img.png';
import Nav_user from '../assets/nav_user_img.png';
import Button from '../components/Button';
import Itemtitle from '../components/Itemtitle';
import Editsection from '../components/Editsection';
import Edittext from '../components/Edittext';
import Editinput from '../components/Editinput';

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
      <form className="edit">
        <div className="edit_title">
          <Itemtitle
            leftChild={'상품 등록하기'}
            rightChild={<Button text={'등록'} type={'register'} />}
          />
        </div>
        <div className="edit_info">
          <Editsection
            topChlid={<Edittext text={'상품 이미지'} />}
            center={<Editinput type={'img'} />}
          />
          <Editsection
            topChlid={<Edittext text={'상품명'} />}
            center={
              <Editinput info={'name'} placeholder={'상품명을 입력해주세요'} />
            }
          />
          <Editsection
            topChlid={<Edittext text={'상품 소개'} />}
            center={
              <Editinput
                info={'info'}
                placeholder={'상품 소개를 입력해주세요'}
              />
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Additem;
