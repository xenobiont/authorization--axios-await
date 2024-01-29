import axios from 'axios';
// Your code here

const messages = {
	login: {
		Success: 'Вы успешно авторизированы',
		Error: 'Неверный пароль',
	},
};
const req = axios.create({
	baseURL: 'https://books.danit.com.ua',
});

const form = document.querySelector('#login-form');

form.addEventListener('submit', async function(e) {
	e.preventDefault();

	try {
		const email = this.querySelector('[name="user-email"]').value;
		const password = this.querySelector('[name="user-password"]').value;
		const messageEl = this.querySelector('#form-message');

		const { data } = await req.post('/login', {
			email,
			password,
		});

		if (data.status === 'Success') localStorage.setItem('token', data.token);
		messageEl.innerHTML = messages.login[data.status];
	} catch (e) {
		console.log(e);
	}
});
