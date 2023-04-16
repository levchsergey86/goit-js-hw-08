import throttle from 'lodash.throttle';

function feedbackForm() {
  const form = document.querySelector('.feedback-form');
  const emailInput = document.querySelector('input[type="email"]');
  const messageTextarea = document.querySelector('textarea');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    try {
      const email = emailInput.value;
      const message = messageTextarea.value;
      if (email && message) {
        console.log({ email, message });
        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageTextarea.value = '';
      } else {
        console.log('Заповніть обидва поля!');
        throw new Error('Заповніть обидва поля!'); 
      }
    } catch (err) {
      console.error(err);
    }
  });

  if (localStorage.getItem('feedback-form-state')) {
    try {
      const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
      emailInput.value = formData.email;
      messageTextarea.value = formData.message;
    } catch (err) {
      console.error(err);
    }
  }

  form.addEventListener(
    'input',
    throttle(function (event) {
      try {
        const feedbackFormState =
          JSON.parse(localStorage.getItem('feedback-form-state')) || {};
        feedbackFormState.email = emailInput.value;
        feedbackFormState.message = messageTextarea.value;
        localStorage.setItem(
          'feedback-form-state',
          JSON.stringify(feedbackFormState)
        );
      } catch (err) {
        console.error(err);
      }
    }, 500)
  );
}

feedbackForm();
