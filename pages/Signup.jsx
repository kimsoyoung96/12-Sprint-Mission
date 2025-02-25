import { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import Link from "next/link";
import { postUserData } from "../src/api/api";
import { useRouter } from "next/router";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_MIN_LEN = 8;

export default function Signup() {
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

  // 닉네임 값 체크
  const nickNameCheck = (nickName) => {
    if (!nickName.trim()) {
      return "닉네임을 입력해주세요";
    }

    return null;
  };

  const onChangeNickName = (e) => {
    const value = e.target.value;
    setNickName(value);

    const errorMessage = nickNameCheck(value);
    setNickNameError(errorMessage);
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

  // 회원가입 버튼 활성화 여부 판단
  useEffect(() => {
    const isNoError =
      !emailError && !nickNameError && !passwordError && !passwordMatchError;
    const hasAllInput = email && nickName && password && passwordMatch;

    const isValidForm = isNoError && hasAllInput;

    setIsButtonDisabled(!isValidForm);
  }, [
    email,
    nickName,
    password,
    passwordMatch,
    emailError,
    nickNameError,
    passwordError,
    passwordMatchError,
  ]);

  // 비밀번호 타입 토글
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      nickname: nickName,
      password: password,
      passwordConfirmation: passwordMatch,
    };

    try {
      const result = await postUserData(userData);

      if (result.success) {
        console.log(result);
        router.push("/");
      } else {
        alert(result.message || "회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
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
          <label className={styles.formLabel}>닉네임</label>
          <input
            onChange={(e) => {
              onChangeNickName(e);
            }}
            className={`${styles.formInput} ${
              nickNameError === null ? "" : styles.errorInput
            }`}
            name="nikname"
            type="text"
            value={nickName}
            placeholder="닉네임을 입력해주세요"
          />
          {nickNameError && (
            <p className={styles.errorMessage}>{nickNameError}</p>
          )}
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
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>비밀번호 확인</label>
          <input
            onChange={(e) => {
              onChangePasswordMatch(e);
            }}
            className={`${styles.formInput} ${
              passwordMatchError === null ? "" : styles.errorInput
            }`}
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
              alt="비밀번호 온오프 토글 이미지"
            />
          </div>
          {passwordMatchError && (
            <p className={styles.errorMessage}>{passwordMatchError}</p>
          )}
        </div>
        <button
          className={`${styles.button} ${
            isButtonDisabled ? "" : styles.disabled
          }`}
          onClick={handleSignUp}
          disabled={isButtonDisabled}
          type="submit"
        >
          회원가입
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
        이미 회원이신가요?
        <span>
          <Link href="/login">로그인</Link>
        </span>
      </div>
    </div>
  );
}
