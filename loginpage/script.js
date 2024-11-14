// input 값 기준설정
const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_MIN_LEN = 8;

// 이메일, 닉네임, 비밀번호, 비밀번호 확인의 각 부모태그(div) id
const formContainer = document.querySelector('.form-container');
const emailField = document.querySelector('#email-field');

// 각각 에러메세지 태그
const emailErrorMessage = document.querySelector('#email-field .error-message');


// input값이 변하면 발생하는 이벤트 추가
formContainer.addEventListener('input', handleFormInput);

function handleFormInput(e) {
  const input = e.target;
  const form = e.currentTarget;

  switch (input.name) {
    case 'username': {
      const mailValueCheck = form['username'].value;
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
  }
}