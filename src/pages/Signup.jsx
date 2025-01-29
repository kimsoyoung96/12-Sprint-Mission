import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Signup.module.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [nickNameError, setNickNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordMatchError, setPasswordMatchError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 이메일 값 체크
  const EmailCheck = (email) => {
    if (!email.trim()) {
      return "이메일을 입력해주세요";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "잘못된 이메일 형식입니다";
    }

    return null;
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    const errorMessage = EmailCheck(value);
    setEmailError(errorMessage);
  };

  // 닉네임 값 체크
  const NickNameCheck = (nickName) => {
    if (!nickName.trim()) {
      return "닉네임을 입력해주세요";
    }

    return null;
  };

  const onChangeNickName = (e) => {
    const value = e.target.value;
    setNickName(value);

    const errorMessage = NickNameCheck(value);
    setNickNameError(errorMessage);
  };

  // 비밀번호 값 체크
  const PasswordCheck = (password) => {
    const PASSWORD_MIN_LEN = 8;

    if (!password.trim()) {
      return `패스워드를 입력해주세요`;
    } else {
      if (password.length < PASSWORD_MIN_LEN) {
        return `패스워드를 ${PASSWORD_MIN_LEN}자 이상입력해주세요`;
      } else {
        return null;
      }
    }
  };

  const onChangePassword = (e) => {
    const nextPassword = e.target.value;
    setPassword(nextPassword);

    const errorMessage = PasswordCheck(nextPassword);
    setPasswordError(errorMessage);
  };

  // 비밀번호 확인 값 체크
  const PasswordMatch = (password, passwordMatch) => {
    if (password !== passwordMatch) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return null;
  };

  const onChangePasswordMatch = (e) => {
    const nextPasswordMatch = e.target.value;
    setPasswordMatch(nextPasswordMatch);

    const errorMessage = PasswordMatch(password, nextPasswordMatch);
    setPasswordMatchError(errorMessage);
  };

  // 회원가입 버튼 활성화
  const BtnDisabled = () => {
    if (
      !emailError &&
      !nickNameError &&
      !passwordError &&
      !passwordMatchError &&
      email &&
      nickName &&
      password &&
      passwordMatch
    ) {
      return setIsButtonDisabled(false);
    }
    return setIsButtonDisabled(true);
  };

  const handleInputChange = () => {
    BtnDisabled();
  };

  // 비밀번호 타입 토글
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  // 로컬레포지토리에 저장하기
  const localSave = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("nickName", nickName);
    localStorage.setItem("password", password);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={"/"}>
          <img
            className={styles.logo}
            src="/image/loginLogo.png"
            alt="로그인 페이지 판다마켓 로고"
          />
        </Link>
      </header>
      <form>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>이메일</label>
          <input
            className={styles.formInput}
            name="username"
            type="text"
            value={email}
            onChange={(e) => {
              onChangeEmail(e);
              handleInputChange();
            }}
            placeholder="이메일을 입력해주세요"
          />
          {emailError && <p>{emailError}</p>}
        </div>{" "}
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>닉네임</label>
          <input
            onChange={(e) => {
              onChangeNickName(e);
              handleInputChange();
            }}
            className={styles.formInput}
            name="nikname"
            type="text"
            value={nickName}
            placeholder="닉네임을 입력해주세요"
          />
          {nickNameError && <p>{nickNameError}</p>}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>비밀번호</label>
          <input
            onChange={(e) => {
              onChangePassword(e);
              handleInputChange();
            }}
            className={styles.formInput}
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            placeholder="비밀번호를 입력해주세요"
          />
          <div className={styles.toggleTag}>
            <img
              className={styles.toggleImg}
              onClick={togglePasswordVisibility}
              src={
                isPasswordVisible
                  ? "/image/btn_visibility_on.png"
                  : "/image/btn_visibility_off.png"
              }
              alt="password-text-off"
            />
          </div>
          {passwordError && <p>{passwordError}</p>}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>비밀번호 확인</label>
          <input
            onChange={(e) => {
              onChangePasswordMatch(e);
              handleInputChange();
            }}
            className={styles.formInput}
            name="password-repeat"
            type={isPasswordVisible ? "text" : "password"}
            value={passwordMatch}
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <div className={styles.toggleTag}>
            <img
              className={styles.toggleImg}
              onClick={togglePasswordVisibility}
              src={
                isPasswordVisible
                  ? "/image/btn_visibility_on.png"
                  : "/image/btn_visibility_off.png"
              }
              alt="password-text-off"
            />
          </div>
          {passwordMatchError && <p>{passwordMatchError}</p>}
        </div>
        <Link to={"/items"}>
          <button
            className={`${styles.button} ${
              isButtonDisabled ? "" : styles.disabled
            }`}
            onClick={localSave}
            disabled={isButtonDisabled}
            type="submit"
          >
            회원가입
          </button>
        </Link>
      </form>
      <div className={styles.loginBox}>
        <div>간편 로그인하기</div>
        <div className={styles.loginImgBox}>
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
      <div className={styles.loginLink}>
        이미 회원이신가요?
        <span>
          <Link to={"/login"}>로그인</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
