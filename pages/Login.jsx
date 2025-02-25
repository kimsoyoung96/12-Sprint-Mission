import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { postUserLoginData } from "../src/api/api";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_MIN_LEN = 8;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  // 이메일 값 체크
  const emailCheck = (email) => {
    if (!email.trim()) {
      return "이메일을 입력해주세요";
    }

    if (!emailRegex.test(email)) {
      return "잘못된 이메일 형식입니다";
    }

    return null;
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    const errorMessage = emailCheck(value);
    setEmailError(errorMessage);
  };

  // 비밀번호 값 체크
  const passwordCheck = (password) => {
    if (!password.trim()) {
      return `패스워드를 입력해주세요`;
    }

    if (password.length < PASSWORD_MIN_LEN) {
      return `패스워드를 ${PASSWORD_MIN_LEN}자 이상입력해주세요`;
    }

    return null;
  };

  const onChangePassword = (e) => {
    const nextPassword = e.target.value;
    setPassword(nextPassword);

    const errorMessage = passwordCheck(nextPassword);
    setPasswordError(errorMessage);
  };

  // 로그인 버튼 활성화

  useEffect(() => {
    const isValidForm = !emailError && !passwordError && email && password;
    setIsButtonDisabled(!isValidForm);
  }, [emailError, passwordError, email, password]);

  // 비밀번호 타입 토글
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  // 로컬스토리지 값과 비교하기
  const handleSignIn = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    try {
      const result = await postUserLoginData(userData);

      if (result.success) {
        console.log(result);
        router.push("/Items");
      } else {
        alert(result.message || "로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
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
            className={`${styles.formInput} ${
              emailError === null ? "" : styles.errorInput
            }`}
            name="username"
            type="text"
            value={email}
            onChange={(e) => {
              onChangeEmail(e);
            }}
            placeholder="이메일을 입력해주세요"
          />
          {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>비밀번호</label>
          <input
            onChange={(e) => {
              onChangePassword(e);
            }}
            className={`${styles.formInput} ${
              passwordError === null ? "" : styles.errorInput
            }`}
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
              alt="비밀번호 온오프 토글 이미지"
            />
          </div>
          {passwordError && (
            <p className={styles.errorMessage}>{passwordError}</p>
          )}
        </div>
        <button
          className={`${styles.button} ${
            isButtonDisabled ? "" : styles.disabled
          }`}
          onClick={handleSignIn}
          disabled={isButtonDisabled}
          type="submit"
        >
          로그인
        </button>
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
        판다마켓이 처음이신가요?
        <span>
          <Link href="/Signup">회원가입</Link>
        </span>
      </div>
    </div>
  );
}
