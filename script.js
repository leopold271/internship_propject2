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
let outerDiv = document.getElementById('outerDiv');

outerDiv.addEventListener('click', (event) => {
    switch (event.target) {
        case outerDiv:
            console.log(`you clicked on div with class ${event.target.className}`);
            break;
        case document.getElementById('middleDiv'):
            console.log(`you clicked on div with class ${event.target.className}`);
            break;
        case document.getElementById('innerDiv'):
            console.log(`you clicked on div with class ${event.target.className}`);
            break;
        default: console.log('error');
    }
})


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

class Cat extends Animal{
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
    for(let arg of args){
        sum += arg;
    }
    console.log(sum);
}

sum(12345, 123, 554);


let arr = [123, 54, 53, 555, 456];
console.log(Math.max(...arr));


//- yield
//- Default parameter

function* numberGenerator(n = 15){
    for(let i = 0; i < n; i++) {
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

let {name, surname, age, gender} = person;
console.log(surname);




