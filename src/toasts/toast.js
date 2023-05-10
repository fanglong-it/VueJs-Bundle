
export function createToast() {
	const toast = document.createElement('div');
	toast.classList.add('toast');
	toast.setAttribute('role', 'alert');
	toast.setAttribute('aria-live', 'assertive');
	toast.setAttribute('aria-atomic', 'true');
	toast.setAttribute('data-bs-autohide', 'false');
	toast.style.border = '1px solid #ccc';
	toast.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

	const toastHeader = document.createElement('div');
	toastHeader.classList.add('toast-header');
	toastHeader.classList.add('bg-success-style');
	toastHeader.style.borderBottom = '1px solid #ccc';

	const toastIcon = document.createElement('i');
	toastIcon.classList.add('fas');
	toastIcon.classList.add('fa-info');
	toastHeader.appendChild(toastIcon);

	const toastBody = document.createElement('div');
	toastBody.classList.add('toast-body');

	const textContent = document.createElement('span');
	textContent.classList.add('text-content');
	textContent.textContent = '';

	toastBody.appendChild(textContent);
	const br = document.createElement('br');
	toastBody.appendChild(br);
	
	const toastTimer = document.createElement('small');
	toastTimer.classList.add('count-time');
	toastBody.appendChild(toastTimer);


	toastHeader.appendChild(toastBody);
	toast.appendChild(toastHeader);
	return toast;
}

export function success(message, time) {
	const toastContainer = document.getElementById('toast-container');
	const toast = createToast();
	const toastHeader = toast.querySelector('.toast-header');
	toastHeader.classList.remove('bg-fail-style');
	toastHeader.classList.add('bg-success-style');
	const toastBody = toast.querySelector('.text-content');
	toastBody.textContent = message;
	toastContainer.appendChild(toast);
	toast.classList.add('show');
	const toastTimer = toast.querySelector('.count-time');
	let second = time;
	toastTimer.textContent = `${second}s left`;
	const countdown = setInterval(() => {
		second--;
		if (second <= 0) {
			clearInterval(countdown);
			toast.classList.remove('show');
			toast.remove();
		} else {
			toastTimer.textContent = `${second}s left`;
		}
	}, 1000);
}

export function fail(message, time) {
	const toastContainer = document.getElementById('toast-container');
	const toast = createToast();
	const toastHeader = toast.querySelector('.toast-header');
	toastHeader.classList.remove('bg-success-style');
	toastHeader.classList.add('bg-fail-style');
	const toastBody = toast.querySelector('.text-content');
	toastBody.textContent = message;
	toastContainer.appendChild(toast);
	toast.classList.add('show');
	const toastTimer = toast.querySelector('.count-time');
	let second = time;
	toastTimer.textContent = `${second}s left`;
	const countdown = setInterval(() => {
		second--;
		if (second <= 0) {
			clearInterval(countdown);
			toast.classList.remove('show');
			toast.remove();
		} else {
			toastTimer.textContent = `${second}s left`;
		}
	}, 1000);
}

import { createApp } from 'vue/dist/vue.esm-bundler.js';
const app = createApp({
    data() {
        return {
            message_toast: '',
        }
    },
    methods: {
        showSuccess: function () {
            success(this.message, 5);
        },

    },
}).mount('#app');

