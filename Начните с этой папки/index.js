import { postTo } from "../modules/useHttp.js"

let form = document.forms.form
let data = localStorage.getItem('user')
let text = document.querySelector('.text2')

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value,key) => {
        user[key] = value
    })


    postTo('users', user)
        .then(res => console.log(res))

    localStorage.setItem('user', JSON.stringify(user))
}

// if(data) {
//     window.location.assign("../log/index.html")
// }
text.onclick = () => {
    window.location.assign("../log/index.html")
}

