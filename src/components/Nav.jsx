import styles from "./Nav.module.css";
import Nav_logo from "../assets/nav_panda_logo_img.png";
import Nav_user from "../assets/nav_user_img.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <Link className={styles.logo} to={"/"}>
        <img className={styles.logoImage} src={Nav_logo} alt="로고" />
      </Link>
      <div className={styles.nav_center}>
        <button className={styles.nav_button} type="button">
          자유게시판
        </button>
        <Link to="/items">
          <button className={styles.nav_button} type="button">
            중고마켓
          </button>
        </Link>
      </div>
      <Link className={styles.nav_user} to={"/"}>
        <img src={Nav_user} alt="유저프로필" />
      </Link>
    </div>
  );
};

export default Nav;
