// // 이메일 형식 에러메세지 추가
const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_MIN_LEN = 8;

const formContainer = document.querySelector('.form-container');
const emailField = document.querySelector('#email-field');
const niknameField = document.querySelector('#nikname-field');
const passwordField = document.querySelector('#password-field');
const emailErrorMessage = document.querySelector('#email-field .error-message');
const niknameErrorMessage = document.querySelector('#nikname-field .error-message');
const passwordErrorMessage = document.querySelector('#password-field .error-message');

formContainer.addEventListener('input', handleFormInput);

function handleFormInput(e) {
  const input = e.target;
  const form = e.currentTarget;

  switch (input.name) {
    case 'email': {
      const mailCheck = form['email'].value;
      emailErrorMessage.classList.toggle('warning', !mailCheck);
      emailErrorMessage.textContent = mailCheck
      ? ''
      : '이메일을 입력해주세요.';
      break;
    }

    case 'nikname': {
      const niknameCheck = form['nikname'].value;
      niknameErrorMessage.classList.toggle('warning', !niknameCheck);
      niknameErrorMessage.textContent = niknameCheck
      ? ''
      : '닉네임을 입력해주세요.';
      break;
    }
    
    case 'password': {
      const password = form['password'].value;
      const passwordLengthCheck = password.length >= PASSWORD_MIN_LEN
      if (!password) {
        passwordErrorMessage.classList.toggle('warning', !password);
        passwordErrorMessage.textContent = password
      ? ''
      : '비밀번호를 입력해주세요.';
      } else {
        if (!passwordLengthCheck) {
          passwordErrorMessage.classList.toggle('warning', !passwordLengthCheck);
          passwordErrorMessage.textContent = passwordLengthCheck
        ? ''
        : `비밀번호는 ${PASSWORD_MIN_LEN}자 이상 입력해주세요.`;
        } else {
          passwordErrorMessage.textContent = ''
        }
      }
      
      break;
    }

    // case 'password-repeat': {
    //   const password = form['password'].value;
    //   const passwordRepeat = form['password-repeat'].value;
    //   const passwordEqualityCheck = password === passwordRepeat;
    //   const passwordLengthCheck = (password.length >= PASSWORD_MIN_LEN) &&
    //   (passwordRepeat >= PASSWORD_MIN_LEN)
    //   const totalPassword = passwordEqualityCheck && passwordLengthCheck
    //   passwordErrorMessage.classList.toggle('warning', !totalPassword);
    //   if (!passwordEqualityCheck) {
    //     passwordErrorMessage.textContent = '비밀번호가 일치하지 않습니다.'
    //   }
    //   if (!passwordLengthCheck) {
    //     passwordErrorMessage.textContent = `비밀번호는 ${PASSWORD_MIN_LEN}자 이상 입력해주세요.`
    //   }
    // }
  }
}