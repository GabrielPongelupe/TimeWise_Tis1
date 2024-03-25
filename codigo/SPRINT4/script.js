const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const registerButton = document.querySelector('.form-box-register button.btn');
const loginButton = document.querySelector('.form-box-login button.btn');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


let users = [];
registerButton.addEventListener('click', (event) => {
    event.preventDefault();

    
    const username = document.querySelector('#username').value;
    const fullname = document.querySelector('#fullname').value;
    const sex = document.querySelector('.sex-select').value;
    const age = document.querySelector('#age').value;
    const job = document.querySelector('#job-select').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    
    const user = {
        username,
        fullname,
        sex,
        age,
        job,
        email,
        password
    };

    
    users.push(user);

    
    localStorage.setItem('users', JSON.stringify(users));


    console.log('Cadastro realizado com sucesso');
});

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.querySelector('.form-box-login input[type="email"]').value;
    const password = document.querySelector('.form-box-login input[type="password"]').value;

    
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    
    const user = storedUsers.find((user) => user.email === email && user.password === password);

    if (user) {
        console.log('Login realizado com sucesso');
    } else {
        console.log('Login falhou');
    }
});


 

