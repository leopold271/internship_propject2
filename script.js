//- арифметические операции
//- присвоение переменных
let calcButton = document.getElementById('calcBtn');

calcButton.addEventListener('click', () => {
        let a = document.getElementById('1stNumber').value;
        let b = document.getElementById('2ndNumber').value;

        let result = a * b;
        document.getElementById('result').value = result;
});

//- работа со строками (конкатенация, экранирование, шаблонизация)
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










