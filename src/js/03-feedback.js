import throttle from 'lodash.throttle';

const feedbackForm = document.forms[0];
const emailInput = feedbackForm.querySelector('input');
const messageInput = feedbackForm.querySelector('textarea');

const formState = {
  email: '',
  message: '',
};

const STATE_STORAGE = JSON.parse(localStorage.getItem('feedback-form-state'));

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);
document.addEventListener('DOMContentLoaded', restoreFormData);

function onFormInput() {
  formState.email = emailInput.value;
  formState.message = messageInput.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  feedbackForm.reset();
  console.log(formState);
}

function restoreFormData() {
  try {
    const email = STATE_STORAGE.email;
    const message = STATE_STORAGE.message;

    emailInput.value = email;
    messageInput.value = message;
  } catch (e) {
    console.log('Please fill all the fields');
  }
}
