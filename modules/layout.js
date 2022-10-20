let body = document.body
console.log(body);
function HeaderReload(param) {
    let header = document.createElement('header')
    let headerCont = document.createElement('div')
    let headerLeft = document.createElement('div')
    let headerRight = document.createElement('div')
    let headerBtn1 = document.createElement('button')
    let headerBtn2 = document.createElement('button')
    let headerBtn3 = document.createElement('button')
    let headerBtn4 = document.createElement('button')
    let exit = document.createElement('div')

    header.classList.add('header')
    headerCont.classList.add('headerCont')
    headerLeft.classList.add('headerLeft')
    headerRight.classList.add('headerRight')
    headerBtn1.classList.add('headerBtn')
    headerBtn1.innerHTML = 'Главная'
    headerBtn2.classList.add('headerBtn2')
    headerBtn2.innerHTML = 'Мои кошельки'
    headerBtn3.classList.add('headerBtn3')
    headerBtn3.innerHTML = 'Мои транзакции'
    headerBtn4.classList.add('headerBtn')
    headerBtn4.innerHTML = param.email
    exit.classList.add('exit')

    header.append(headerCont)
    headerCont.append(headerLeft, headerRight)
    headerLeft.append(headerBtn1, headerBtn2, headerBtn3)
    headerRight.append(headerBtn4, exit)
    document.body.prepend(header)
}
export default HeaderReload