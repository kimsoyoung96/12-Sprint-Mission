import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <form className="form_container">
      <div className="box">
        <header className="login_logo">
          <Link to={"/"}>
            <img
              className="logo_img"
              src="/image/loginLogo.png"
              alt="로그인 페이지 판다마켓 로고"
            />
          </Link>
        </header>
        <div id="email_field">
          <label className="label_title">이메일</label>
          <input
            className="btn_email"
            name="username"
            type="text"
            placeholder="이메일을 입력해주세요"
          />
          <div className="error_message"></div>
        </div>
        <div id="password_field">
          <label className="label_title">비밀번호</label>
          <input
            className="btn_password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="btn_toggle_field">
            <i className="btn_toggle">
              <img
                className="icon_toggle"
                src="/image/btn_visibility_off.png"
                alt="password_text_off"
              />
            </i>
          </div>
          <div className="error_message"></div>
        </div>
        <button disabled className="button" type="button">
          <a href="/items/index.html">로그인</a>
        </button>
        <div className="easy_login">
          <p className="easy_login_text">간편 로그인하기</p>
          <div className="easy_login_sns">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/googleLogin.png"
                alt="구글 계정으로 로그인하는 버튼"
              />
            </a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/kakaoLogin.png"
                alt="카카오톡 계정으로 로그인하는 버튼"
              />
            </a>
          </div>
        </div>
        <div className="join">
          판다마켓이 처음이신가요?{" "}
          <Link className="join_page" to={"/signup"}>
            회원가입
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
