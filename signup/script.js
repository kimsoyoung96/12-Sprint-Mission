// // 이메일 형식 에러메세지 추가
const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const formContainer = document.querySelector('.form-container');
const emailField = document.querySelector('#email-field');
const emailErrorMessage = document.querySelector('#email-field .error-message');

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
    // case 'nikname': {

    // }
    // case 'password': {
    //   dsaf

    // }
    // case 'password-check': {
    //   asdf
    // }
  }
}