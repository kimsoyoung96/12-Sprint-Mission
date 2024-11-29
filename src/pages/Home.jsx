import './Home.css';
import Nav_logo from '../assets/nav_panda_logo_img.png';
import Nav_user from '../assets/nav_user_img.png';

const Home = () => {
  return (
    <div className="Home">
      <div className="nav_logo">
        <img src={Nav_logo} />
      </div>
      <div className="nav_center">
        <button>자유게시판</button>
        <button>중고마켓</button>
      </div>
      <div className="nav_user">
        <img src={Nav_user} />
      </div>
    </div>
  );
};

export default Home;
