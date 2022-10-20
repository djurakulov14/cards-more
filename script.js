import Header from './modules/layout.js'
import {fetchAll} from './modules/useHttp.js'

let wallets = document.querySelector('.wallets')
let user = JSON.parse(localStorage.getItem('user')) 

fetchAll('cards', '?userid=' + user.id)
    .then(res => reload(res, wallets))

fetchAll('users', '?userid=' + user.id)
    .then(res => {
        reload2(res.at(-1))
        console.log(user);
        console.log(res.at(-1));
    })
    
    Header(user)
    let exit = document.querySelector('.exit')
    exit.onclick = () => {
        window.location.assign("./Начните с этой папки/registration.html")
    }
    
    

let arr = [
    {
        id: 1232312,
        card: 'VISA',
        car: 'Автомобиль',
        sum: '414,000,000',
        data: '4 дня назад'
    },
    {
        id: 1232312,
        card: 'VISA',
        car: 'Автомобиль',
        sum: '414,000,000',
        data: '4 дня назад'
    },
    {
        id: 1232312,
        card: 'VISA',
        car: 'Автомобиль',
        sum: '414,000,000',
        data: '4 дня назад'
    },
    {
        id: 1232312,
        card: 'VISA',
        car: 'Автомобиль',
        sum: '414,000,000',
        data: '4 дня назад'
    },
    {
        id: 1232312,
        card: 'VISA',
        car: 'Автомобиль',
        sum: '414,000,000',
        data: '4 дня назад'
    },
    {
        id: 1232312,
        card: 'VISA',
        car: 'Автомобиль',
        sum: '414,000,000',
        data: '4 дня назад'
    },
    {
        id: 1232312,
        card: 'VISA',
        car: 'Автомобиль',
        sum: '414,000,000',
        data: '4 дня назад'
    }
]
let box = document.querySelector('.transaction')
for(let item of arr) {
    let trans = document.createElement('div')
    let id = document.createElement('p')
    let card = document.createElement('p')
    let car = document.createElement('p')
    let sum = document.createElement('p')
    let data = document.createElement('p')

    trans.classList.add('history')
    id.classList.add('text')
    id.innerHTML = item.id
    card.classList.add('a1')
    card.innerHTML = item.card
    car.classList.add('b1')
    car.innerHTML = item.car
    sum.classList.add('c1')
    sum.innerHTML = item.sum
    data.classList.add('d1')
    data.innerHTML = item.data

    box.append(trans)
    trans.append(id,card,car,sum,data)
}
let wallet1 = document.querySelector('.headerBtn2')
let wallet2 = document.querySelector('.seemore')
let transaction = document.querySelector('.lasttext')
wallet1.onclick = () => {
    window.location.assign('./wallet/index.html')
}
wallet2.onclick = () => {
    window.location.assign('./wallet/index.html')
}
transaction.onclick = () => {
    window.location.assign('./Mytransaction/index.html')
}
let transaction1 = document.querySelector('.headerBtn3')
transaction1.onclick = () => {
    window.location.assign('./Mytransaction/index.html')
}




function reload(arr, place){
    place.innerHTML = ""
    
    for(let item of arr) {
        place.innerHTML += `
        <div class="wallet">
        <p class="visa">${item.name}</p>
        <p class="rub">${item.currency}</p>
        </div>                        
        `
    }
}
let hello = document.querySelector('.hello')
let email = document.querySelector('.email')

function reload2(arr)  {
    hello.innerHTML = ''
    email.innerHTML = ''


        hello.innerHTML += `
        Добро пожаловать, ${arr.name} ${arr.surname}!
        `
        email.innerHTML += `
            ${arr.email}
        `
        console.log(arr);

    
    console.log(arr);
}
