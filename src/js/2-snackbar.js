import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = event.target.delay.value;
  const state = event.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(data => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${data}ms`,
      });
    })
    .catch(data => {
      iziToast.error({
        message: `❌ Rejected promise in ${data}ms`,
      });
    });
  event.target.delay.value = '';
}
