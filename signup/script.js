const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_MIN_LEN = 8;

const formContainer = document.querySelector('.form-container');
const emailField = document.querySelector('#email-field');
const niknameField = document.querySelector('#nikname-field');
const passwordField = document.querySelector('#password-field');
const passwordRepeatField = document.querySelector('#password-repeat-field');

const emailErrorMessage = document.querySelector('#email-field .error-message');
const niknameErrorMessage = document.querySelector('#nikname-field .error-message');
const passwordErrorMessage = document.querySelector('#password-field .error-message');
const passwordRepeatErrorMessage = document.querySelector('#password-repeat-field .error-message');


formContainer.addEventListener('input', handleFormInput);

function handleFormInput(e) {
  const input = e.target;
  const form = e.currentTarget;

  switch (input.name) {
    case 'email': {
      const mailValueCheck = form['email'].value;
      const mailFormCheck = EMAIL_REGEXP.test(mailValueCheck);

      if (!mailValueCheck) {
        emailField.classList.toggle('warning', !mailValueCheck);
        emailErrorMessage.textContent = mailValueCheck
      ? ''
      : '이메일을 입력해주세요.';
      } else {
        if (!mailFormCheck) {
          emailField.classList.toggle('warning', !mailFormCheck);
          emailErrorMessage.textContent = mailFormCheck
        ? ''
        : '잘못된 이메일 형식입니다.';
        } else {
          emailField.classList.toggle('warning', !mailFormCheck);
          emailErrorMessage.textContent = ''
        }
      }
      
      break;
    }

    case 'nikname': {
      const niknameCheck = form['nikname'].value;
      niknameField.classList.toggle('warning', !niknameCheck);
      niknameErrorMessage.textContent = niknameCheck
      ? ''
      : '닉네임을 입력해주세요.';
      break;
    }
    
    case 'password': {
      const password = form['password'].value;
      const passwordLengthCheck = password.length >= PASSWORD_MIN_LEN
      if (!password) {
        passwordField.classList.toggle('warning', !password);
        passwordErrorMessage.textContent = password
      ? ''
      : '비밀번호를 입력해주세요.';
      } else {
        if (!passwordLengthCheck) {
          passwordField.classList.toggle('warning', !passwordLengthCheck);
          passwordErrorMessage.textContent = passwordLengthCheck
        ? ''
        : `비밀번호는 ${PASSWORD_MIN_LEN}자 이상 입력해주세요.`;
        } else {
          passwordErrorMessage.textContent = ''
        }
      }
      
      break;
    }

    case 'password-repeat': {
      const password = form['password'].value; // 비교하는 용도
      const passwordRepeat = form['password-repeat'].value;
      const passwordEqualityCheck = password === passwordRepeat;
      passwordRepeatField.classList.toggle('warning', !passwordEqualityCheck);
      passwordRepeatErrorMessage.textContent = passwordEqualityCheck
      ? ''
      : '비밀번호가 일치하지 않습니다..';

      break;
    }
  }
}