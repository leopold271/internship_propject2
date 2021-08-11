
import './App.css'
import React from 'react';

const App = (props) => {

//     //- арифметические операции
// //- присвоение переменных
// let calcButton = document.getElementById('calcBtn');

// calcButton.addEventListener('click', () => {
//     let a = document.getElementById('1stNumber').value;
//     let b = document.getElementById('2ndNumber').value;

//     let result = a * b;
//     document.getElementById('result').value = result;
// });

// //- работа со строками (конкатенация, экранирование)
// let textarea = document.getElementById('textarea');

// textarea.addEventListener('blur', () => {
//     alert(textarea.value + '?');
//     alert("\"" + textarea.value + "\"");
// });

// //- вывод в консоль
// //- логические операции
// // -шаблонизация
// // let outerDiv = document.getElementById('outerDiv');

// // outerDiv.addEventListener('click', (event) => {
// //     switch (event.target) {
// //         case outerDiv:
// //             console.log(`you clicked on div with class ${event.target.className}`);
// //             break;
// //         case document.getElementById('middleDiv'):
// //             console.log(`you clicked on div with class ${event.target.className}`);
// //             break;
// //         case document.getElementById('innerDiv'):
// //             console.log(`you clicked on div with class ${event.target.className}`);
// //             break;
// //         default: console.log('error');
// //     }
// // })


// //- обработка ошибок – try/catch
// try {
//     a = 5;
//     document.getElementById('dsa').innerHTML = a;
// }
// catch (err) {
//     console.log(err);
// }

// //- изменение контента определенного элемента
// let listElemnets = document.querySelectorAll('.list ul li');

// for (let elem of listElemnets) {
//     elem.innerHTML = 'Hello';
// }


// //а) наведение мыши,
// //в) снятие курсора мыши с элемента
// let hyperlink = document.getElementById('hyperlink');
// hyperlink.addEventListener('mouseover', () => {
//     alert('are you sure?');
// });
// hyperlink.addEventListener('mouseout', () => {
//     alert('come back when you are sure');
// });


// //г) фокус инпута
// let emailInput = document.getElementById('email');
// let passworInput = document.getElementById('password');

// emailInput.addEventListener('blur', () => {
//     if (!emailInput.value.includes('@')) {
//         emailInput.classList.add('invalid');
//     } else {
//         emailInput.classList.remove('invalid');
//         emailInput.classList.add('valid');
//     }
// });

// passworInput.addEventListener('blur', () => {
//     if (passworInput.value.length < 8) {
//         passworInput.classList.add('invalid');
//     } else {
//         passworInput.classList.remove('invalid');
//         passworInput.classList.add('valid');
//     }
// });


// //д) изменение контента элемента
// let nameInput = document.getElementById('name');
// let surnameInput = document.getElementById('surname');

// nameInput.addEventListener('blur', () => {
//     let name = nameInput.value;
//     let div = document.createElement('div');
//     div.innerHTML = `${name}`;
//     nameOnBottom.prepend(div);
// });

// surnameInput.addEventListener('blur', () => {
//     let surname = surnameInput.value;
//     let div = document.createElement('div');
//     div.innerHTML = `${surname}`;
//     surnameOnBottom.prepend(div);
// });


// //- предотвращение работы события
// linkToGoogle.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert(event.target.getAttribute('href'));
// })


// //- класс в JS
// //- ‘super’ keyword
// class Animal {
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.isMammal = options.isMammal;
//     }

//     voice() {
//         console.log('i am animal');
//     }
// }

// class Cat extends Animal {
//     constructor(options) {
//         super(options);
//         this.color = options.color;
//     }

//     voice() {
//         super.voice();
//         console.log('i am a cat');
//     }
// }

// let cat1 = new Cat({
//     name: 'Cat',
//     age: 2,
//     color: 'black',
//     isMammal: true
// });


// //- Spread/Rest operator
// function sum(...args) {
//     let sum = 0
//     for (let arg of args) {
//         sum += arg;
//     }
//     console.log(sum);
// }

// sum(12345, 123, 554);


// let arr = [123, 54, 53, 555, 456];
// console.log(Math.max(...arr));


// //- yield
// //- Default parameter

// function* numberGenerator(n = 15) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }
// let num = numberGenerator();

// //- деструктуризация объекта

// let person = {
//     name: 'John',
//     surname: 'Smith',
//     age: 32,
//     gender: 'male'
// }

// let { name, surname, age, gender } = person;
// console.log(surname);

// // it 6


// //- получение текущего URL
// let URL = location.href;
// console.log(URL);


// //- получение, навигация и изменение истории переходов страницы/окна (BOM)
// console.log(history);

// function goBack() {
//     history.back();
// }

// function goForwoard() {
//     history.forward();
// }

// function goTo(num) {
//     history.go(num);
// }

// history.pushState(null, 'someTitle');
// history.replaceState(null, 'someTitle2');

// // вывод alert

// //alert('вывод alert');


// //- сохранение Cookie и перезапись с параметрами

// function createCookies(name, surname) {
//     document.cookie = `name=${name}`;
//     document.cookie = `surname=${surname}`;
// }

// let createCookiesBtn = document.getElementById('createCookies');
// createCookiesBtn.addEventListener('click', () => {
//     let name = prompt('your name?');
//     let surname = prompt('your suraname?');
//     createCookies(name, surname);
// });
// console.log(document.cookie);


// //- сохранение данных в Local Storage, Session Storage и получение данных из них

// let calcBtn = document.getElementById('calcBtn');

// calcBtn.addEventListener('click', () => {
//     let a = document.getElementById('1stNumber');
//     let b = document.getElementById('2ndNumber');
//     let result = document.getElementById('result');
//     sessionStorage.setItem('a', a.value);
//     sessionStorage.setItem('b', b.value);
//     sessionStorage.setItem('result', result.value);
// })
// console.log(sessionStorage);

// let submmitFullNameBtn = document.getElementById('submmitFullName');

// submmitFullName.addEventListener('click', () => {
//     let name = document.getElementById('name').value;
//     let surname = document.getElementById('surname').value;
//     localStorage.setItem('name', name);
//     localStorage.setItem('surname', surname);
// })

// console.log(localStorage);


// // it7
// function getAndSetUser(name) {

//     fetch(`https://api.github.com/users/${name}`, { method: 'GET' })
//         .then((response) => {
//            return repo = response.json();
//         })
//         .then((repo) => {
//             let {login, id, followers} = repo;
//             let div = document.createElement('div');
//             div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
//             let wrapper = document.getElementById('userInfoWrapper');
//             wrapper.prepend(div);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
              
// }

// getAndSetUser('leopold271');

// // function insertUserInfo (funcGetUser) {
// //     let user = funcGetUser('leopold271');
// //     let {login, id, followers} = user;
// //     let div = document.createElement('div');
// //     div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
// //     let wrapper = document.getElementById('userInfoWrapper');
// //     wrapper.prepend(div);
// // }

// // insertUserInfo(getUser)

// async function getUser(name) {
//     try {
//         let response = await fetch(`https://api.github.com/users/${name}`, { method: 'GET' })
//         if (response.status == 200) {
//             let repo = await response.json();
//             return repo;
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

// async function insertUserInfo2 (funcGetUser) {
//     let user = await funcGetUser('leopold271');
//     let {login, id, followers} = user;
//     let div = document.createElement('div');
//     div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
//     let wrapper = document.getElementById('userInfoWrapper');
//     wrapper.prepend(div);
// }

// // insertUserInfo2(getUser);






    let emailRef = React.createRef();
    let passwordRef = React.createRef();


    function handleSubmitLoginForm(e) {
        e.preventDefault();
        let email = emailRef.current.value;
        let password = passwordRef.current.value
        let message = `your email: ${email}\nyour password: ${password}`
        alert(message);
    }

    return (
        <div className="body">
            <div className="loginFormContainer">
                <p>Enter your email and password</p>
                <form className="loginForm">
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input className="email" ref={emailRef} type="email" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input type="password" ref={passwordRef} />
                    <br />
                    <input onClick={handleSubmitLoginForm} id="submitLoginForm" type="submit" />
                </form>
            </div>

            <div className="info">
                <div className="nameAndSurname">
                    <div id="nameOnBottom">

                    </div>
                    <div id="surnameOnBottom">

                    </div>
                </div>
                <div className="infoName">
                    <form>
                        <label htmlFor="name">Your name:</label>
                        <input type="text" name="name" id="name" /><br />
                        <label htmlFor="surname">Your surname:</label>
                        <input type="text" name="surname" id="surname" /><br />
                        <input type="reset" />
                        <input id="submmitFullName" type="submit" />
                    </form>
                </div>
                <div className="gender">
                    <p>Select your gender</p>
                    <form>
                        <input type="radio" name="gender" id="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" />
                        <label htmlFor="female">Female</label>
                    </form>
                </div>
                <div className="colors">
                    <form>
                        <label htmlFor="colors">Choose your favourite color/s</label><br />
                        <select name="colors" id="colors" size="5" defaultValue="red">
                            <option value="red">red</option>
                            <option value="green">green</option>
                            <option value="blue">blue</option>
                            <option value="black">black</option>
                            <option value="yellow">yellow</option>
                        </select><br />
                        <input type="submit" name="colors" />
                    </form>
                </div>
                <div className="vehicle">
                    <form>
                        <label htmlFor="vehicle">What type of vehicle do you prefer?</label><br />
                        <label htmlFor="car">Car</label>
                        <input type="checkbox" name="car" id="car" /><br />
                        <label htmlFor="bicycle">Bicycle</label>
                        <input type="checkbox" name="bicycle" id="bicycle" /><br />
                        <label htmlFor="scooter">Scooter</label>
                        <input type="checkbox" name="scooter" id="scooter" /><br />
                    </form>
                </div >
                <div id="userInfoWrapper">

                </div>
            </div>

            <div className="text">
                <p id="text">
                    <span className="capitalize">d</span>olor sit amet consectetur adipisicing
                    elit. Recusandae dicta animi commodi repellendus suscipit!
                    Eius possimus aut ut cupiditate laborum
                    suscipit quia ipsam, magnam, architecto, facere nostrum voluptate!
                    <a id="linkToGoogle" href="http://www.google.com">Lorem</a> ipsum dolor sit amet, consectetur adipisicing
                    elit. Excepturi commodi officia adipisci consequatur
                    iusto,
                    sit ducimus facere magni provident eum. Tempore, consequuntur vel illo unde reprehenderit dolore ab laborum
                    dolorum
                    pariatur fuga possimus beatae, non praesentium sint aut similique! Facere nisi dolore dignissimos obcaecati
                    dolores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum. Vel, quaerat expedita quae
                    perferendis nostrum
                    ipsum impedit saepe accusamus ea quis adipisci nesciunt voluptas est mollitia, corrupti ut voluptate animi
                    amet explicabo
                    exercitationem veniam quia unde nobis dolorum. Sequi dignissimos ab sapiente aspernatur. Natus corrupti quia
                    ut voluptatum
                    dicta aspernatur animi tempora explicabo ipsa optio nesciunt qui dolorem libero asperiores ipsum voluptates,
                    amet maiores
                    id sequi perspiciatis temporibus, ducimus porro praesentium fuga. Impedit debitis omnis, beatae et
                    perferendis suscipit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur totam distinctio magnam, optio
                    ad itaque eius e
                    xpedita modi, error quisquam unde ut hic soluta perspiciatis dolor qui voluptatem? Ab eos temporibus
                    praesentium non neque
                    modi similique ipsa explicabo in tempore, fuga laudantium iste voluptatum harum ex quo error quibusdam
                    officiis. Magni delectu
                    s ut consequuntur eligendi, ipsam aliquam, magnam incidunt distinctio nemo maiores quibusdam optio
                    similique. Aliquid in ullam
                    id ea alias laboriosam rem aspernatur modi voluptates cumque! Harum obcaecati libero earum magnam qui,
                    doloremque, ratione quas
                    sit natus ullam eum beatae est rerum. Pariatur, voluptatum magnam cumque hic, odio nobis nesciunt iure
                    deserunt natus reprehenderit
                    voluptatibus in! Necessitatibus ducimus placeat soluta culpa quasi voluptatem explicabo non. Laudantium
                    repellendus a facere
                    consectetur distinctio. A eum labore iste alias non dolore, voluptates ratione asperiores odio, nemo cumque
                    adipisci animi
                    deserunt quo, possimus ea reiciendis molestias incidunt. At iusto nihil vero nisi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ea? Et nemo soluta eum dolore possimus,
                    ipsa rem? Laudantium
                    excepturi consectetur eligendi pariatur voluptatibus inventore eveniet placeat optio repellendus deserunt
                    assumenda delectus dolorem
                    aliquam cumque impedit, fugit sapiente quos minus aut, adipisci voluptatum, rerum itaque! Quo vero fuga
                    quidem esse molestiae harum
                    adipisci alias similique deserunt at officia excepturi aliquid tempore, consequatur quibusdam. Fugit
                    voluptas blanditiis sunt temporibus
                    magnam molestias doloremque numquam. Minima sed repudiandae praesentium! Pariatur, iure dolorem culpa id
                    eaque commodi fugit? Repellendus
                    culpa incidunt explicabo, pariatur officiis, aperiam consectetur qui sunt, dolorem doloremque eaque corrupti
                    accusamus dolor sit quidem
                    corporis aspernatur at excepturi esse? Quidem aut veniam provident explicabo pariatur? Neque, delectus
                    debitis? Pariatur dolorum vitae
                    cum nobis qui delectus. Explicabo consequuntur harum dolorem recusandae id doloremque. Suscipit delectus
                    accusantium dignissimos et ea
                    minima porro? Blanditiis omnis iure vero officia explicabo, exercitationem dolore perferendis quae
                    reprehenderit rem.
                </p>
            </div>


            <div className="squares">
                <div className="square1">
                    <div className="square1Content">
                        <div className="textarea">
                            <img className="questionImg"
                                src="data:image/png;base64,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"
                                alt="question mark" />
                            <form className="textareaForm">
                                <textarea id="textarea" cols="10" placeholder="Write about yourself"></textarea>
                                <input type="submit" />
                            </form>
                        </div>
                        <div id="hyperlink" className="hyperlink">
                            <a href="http://www.google.com">hyperlink</a>
                        </div>
                    </div>

                </div>
                <div className="square2">
                    <div className="calc">
                        <form>
                            <label htmlFor="1stNumber">1st number</label>
                            <input type="text" id="1stNumber" /><br />
                            <label htmlFor="2ndNumber">2nd number</label>
                            <input type="text" id="2ndNumber" />
                            <input type="button" value="calc" id="calcBtn" />
                            <label htmlFor="result">result</label>
                            <input type="text" id="result" />
                            <input type="reset" />
                        </form>
                    </div>
                </div>
                <div className="square3">
                    <div className="list">
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>lorem</li>
                        </ul>
                    </div>
                    <div id="createCookies" className="createCookies">
                        <button type="button">create cookies</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App;
