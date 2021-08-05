//- арифметические операции
//- присвоение переменных
let calcButton = document.getElementById('calcBtn');

calcButton.addEventListener('click', () => {
    let a = document.getElementById('1stNumber').value;
    let b = document.getElementById('2ndNumber').value;

    let result = a * b;
    document.getElementById('result').value = result;
});

//- работа со строками (конкатенация, экранирование)
let textarea = document.getElementById('textarea');

textarea.addEventListener('blur', () => {
    alert(textarea.value + '?');
    alert("\"" + textarea.value + "\"");
});

//- вывод в консоль
//- логические операции
// -шаблонизация
// let outerDiv = document.getElementById('outerDiv');

// outerDiv.addEventListener('click', (event) => {
//     switch (event.target) {
//         case outerDiv:
//             console.log(`you clicked on div with class ${event.target.className}`);
//             break;
//         case document.getElementById('middleDiv'):
//             console.log(`you clicked on div with class ${event.target.className}`);
//             break;
//         case document.getElementById('innerDiv'):
//             console.log(`you clicked on div with class ${event.target.className}`);
//             break;
//         default: console.log('error');
//     }
// })


//- обработка ошибок – try/catch
try {
    a = 5;
    document.getElementById('dsa').innerHTML = a;
}
catch (err) {
    console.log(err);
}

//- изменение контента определенного элемента
let listElemnets = document.querySelectorAll('.list ul li');

for (let elem of listElemnets) {
    elem.innerHTML = 'Hello';
}



//- добавление обработчиков на:

//б) клик
// + -предотвращение работы события
let submitLoginFormButton = document.getElementById('submitLoginForm');
submitLoginFormButton.addEventListener("click", () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (!email.includes('@mail.com') || !email.includes('@gmail.com')) {
        return false;
    }
    let message = 'your email: ' + email + `\n` + 'your password: ' + password
    alert(message);
});


//а) наведение мыши,
//в) снятие курсора мыши с элемента
let hyperlink = document.getElementById('hyperlink');
hyperlink.addEventListener('mouseover', () => {
    alert('are you sure?');
});
hyperlink.addEventListener('mouseout', () => {
    alert('come back when you are sure');
});


//г) фокус инпута
let emailInput = document.getElementById('email');
let passworInput = document.getElementById('password');

emailInput.addEventListener('blur', () => {
    if (!emailInput.value.includes('@')) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    }
});

passworInput.addEventListener('blur', () => {
    if (passworInput.value.length < 8) {
        passworInput.classList.add('invalid');
    } else {
        passworInput.classList.remove('invalid');
        passworInput.classList.add('valid');
    }
});


//д) изменение контента элемента
let nameInput = document.getElementById('name');
let surnameInput = document.getElementById('surname');

nameInput.addEventListener('blur', () => {
    let name = nameInput.value;
    let div = document.createElement('div');
    div.innerHTML = `${name}`;
    nameOnBottom.prepend(div);
});

surnameInput.addEventListener('blur', () => {
    let surname = surnameInput.value;
    let div = document.createElement('div');
    div.innerHTML = `${surname}`;
    surnameOnBottom.prepend(div);
});


//- предотвращение работы события
linkToGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    alert(event.target.getAttribute('href'));
})


//- класс в JS
//- ‘super’ keyword
class Animal {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.isMammal = options.isMammal;
    }

    voice() {
        console.log('i am animal');
    }
}

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    voice() {
        super.voice();
        console.log('i am a cat');
    }
}

let cat1 = new Cat({
    name: 'Cat',
    age: 2,
    color: 'black',
    isMammal: true
});


//- Spread/Rest operator
function sum(...args) {
    let sum = 0
    for (let arg of args) {
        sum += arg;
    }
    console.log(sum);
}

sum(12345, 123, 554);


let arr = [123, 54, 53, 555, 456];
console.log(Math.max(...arr));


//- yield
//- Default parameter

function* numberGenerator(n = 15) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
let num = numberGenerator();

//- деструктуризация объекта

let person = {
    name: 'John',
    surname: 'Smith',
    age: 32,
    gender: 'male'
}

let { name, surname, age, gender } = person;
console.log(surname);

// it 6


//- получение текущего URL
let URL = location.href;
console.log(URL);


//- получение, навигация и изменение истории переходов страницы/окна (BOM)
console.log(history);

function goBack() {
    history.back();
}

function goForwoard() {
    history.forward();
}

function goTo(num) {
    history.go(num);
}

history.pushState(null, 'someTitle');
history.replaceState(null, 'someTitle2');

// вывод alert

//alert('вывод alert');


//- сохранение Cookie и перезапись с параметрами

function createCookies(name, surname) {
    document.cookie = `name=${name}`;
    document.cookie = `surname=${surname}`;
}

let createCookiesBtn = document.getElementById('createCookies');
createCookiesBtn.addEventListener('click', () => {
    let name = prompt('your name?');
    let surname = prompt('your suraname?');
    createCookies(name, surname);
});
console.log(document.cookie);


//- сохранение данных в Local Storage, Session Storage и получение данных из них

let calcBtn = document.getElementById('calcBtn');

calcBtn.addEventListener('click', () => {
    let a = document.getElementById('1stNumber');
    let b = document.getElementById('2ndNumber');
    let result = document.getElementById('result');
    sessionStorage.setItem('a', a.value);
    sessionStorage.setItem('b', b.value);
    sessionStorage.setItem('result', result.value);
})
console.log(sessionStorage);

let submmitFullNameBtn = document.getElementById('submmitFullName');

submmitFullName.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
})

console.log(localStorage);


// it7
function getAndSetUser(name) {

    fetch(`https://api.github.com/users/${name}`, { method: 'GET' })
        .then((response) => {
           return repo = response.json();
        })
        .then((repo) => {
            let {login, id, followers} = repo;
            let div = document.createElement('div');
            div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
            let wrapper = document.getElementById('userInfoWrapper');
            wrapper.prepend(div);
        })
        .catch((err) => {
            console.log(err);
        })
              
}

getAndSetUser('leopold271');

// function insertUserInfo (funcGetUser) {
//     let user = funcGetUser('leopold271');
//     let {login, id, followers} = user;
//     let div = document.createElement('div');
//     div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
//     let wrapper = document.getElementById('userInfoWrapper');
//     wrapper.prepend(div);
// }

// insertUserInfo(getUser)

async function getUser(name) {
    try {
        let response = await fetch(`https://api.github.com/users/${name}`, { method: 'GET' })
        if (response.status == 200) {
            let repo = await response.json();
            return repo;
        }
    } catch (err) {
        console.log(err);
    }
}

async function insertUserInfo2 (funcGetUser) {
    let user = await funcGetUser('leopold271');
    let {login, id, followers} = user;
    let div = document.createElement('div');
    div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
    let wrapper = document.getElementById('userInfoWrapper');
    wrapper.prepend(div);
}

// insertUserInfo2(getUser);




