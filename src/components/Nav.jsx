import "./Nav.css";
import Button from "./Button";
import Nav_logo from "../assets/nav_panda_logo_img.png";
import Nav_user from "../assets/nav_user_img.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to={"/"}>
        <img src={Nav_logo} alt="로고" />
      </Link>
      <div className="nav_button nav_center">
        <Button text={"자유게시판"} />
        <Link to="/items">
          <Button text={"중고마켓"} type={"nav_activate"} />
        </Link>
      </div>
      <img className="nav_user" src={Nav_user} alt="유저프로필" />
    </div>
  );
};

export default Nav;
