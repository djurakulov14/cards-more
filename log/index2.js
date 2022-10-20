import {fetchAll} from '../modules/useHttp.js'
let form = document.forms.form
let data = localStorage.getItem('user'); data = JSON.parse(data)
let text = document.querySelector('.text2')
let next = document.querySelector('.next')
let inps = document.querySelectorAll('.inp')

let user_data = []


fetchAll('users', '?useremail=' + data.email)
    .then(res => {
        user_data = res
        user_data.forEach(item => user_data = item)
        console.log(user_data);
    })

form.onsubmit = (event) => {
    
    event.preventDefault()
    
    let user = {}
    
    let fm = new FormData(form)
    
    fm.forEach((value,key) => {
        user[key] = value
    })
    console.log(user);
    console.log(user_data);


    if(user.email === user_data.email && user.password == user_data.password) {
        window.location.assign("../index.html")
    } else {
        alert("Логин или палоль не правильный")
    }
}

text.onclick = () => {
    localStorage.removeItem('user')
    window.location.assign("../Начните с этой папки/registration.html")
}
