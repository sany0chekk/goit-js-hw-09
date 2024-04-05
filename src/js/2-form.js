'use strict';

const feedbackForm = document.querySelector('.feedback-form'),
  feedbackFormEmail = feedbackForm.elements.email,
  feedbackFormMessage = feedbackForm.elements.message;

const localStorageKey = 'feedback-form-state';
const savedFormData = localStorage.getItem(localStorageKey);

if (savedFormData) {
  const returnFormData = JSON.parse(savedFormData);
  feedbackFormEmail.value = returnFormData.email;
  feedbackFormMessage.value = returnFormData.message;
}

feedbackForm.addEventListener('input', () => {
  const formData = {
    email: feedbackFormEmail.value.trim(),
    message: feedbackFormMessage.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  //   console.log(JSON.parse(l));

  if (feedbackFormEmail.value && feedbackFormMessage.value) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
  }
});
