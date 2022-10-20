import Header from '../modules/layout.js'

Header()
let wallet3 = document.querySelector('.headerBtn')
wallet3.onclick = () => {
    window.location.assign("../index.html")
}
let add = document.querySelector('.add')
add.onclick = () => {
    window.location.assign('../addwallet/index.html')
}

let wallet1 = document.querySelector('.headerBtn3')
wallet1.onclick = () => {
    window.location.assign('../Mytransaction/index.html')
}
let exit = document.querySelector('.exit')
exit.onclick = () => {
    window.location.assign("../Начните с этой папки/registration.html")
}