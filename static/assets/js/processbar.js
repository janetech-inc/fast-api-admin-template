const visibleProcessBar = (b) => {
    b ?
        document.querySelector('.process').classList.remove('d-none')
    :
        document.querySelector('.process').classList.add('d-none')
}

let isHidden = true

if ( document.querySelector('.show-pass-btn') ) {

    document.querySelector('.show-pass-btn').addEventListener('click' , (e) => {
        const pass1 = document.querySelector('#id_password1')
    
        const type = isHidden ? 'text' : 'password';
        isHidden = !isHidden
        pass1.setAttribute('type',type)
    
        const pass2 = document.querySelector('#id_password2')
        pass2.setAttribute('type',type)
    
        document.querySelector('#show-pass-icon').className = isHidden ? "feather m-0 icon-eye" : "feather m-0 icon-eye-off"
    });    
}

if ( document.querySelector('.copy-pass-btn') ) {

    document.querySelector('.copy-pass-btn').addEventListener('mouseup' , (e) => {
        document.querySelector('#id_password2').value = document.querySelector('#id_password1').value
    });    
}

const changeProcessBarStatus = (s) => {
    const processBar = document.querySelector('.process-val')

    if (s <= 40)
        processBar.style.backgroundColor = 'red'
    else if (s <= 60)
        processBar.style.backgroundColor = 'orange'
    else if (s <= 80)
        processBar.style.backgroundColor = 'yellow'
    else if (s <= 100)
        processBar.style.backgroundColor = 'green'

    processBar.style.width = (s === 0 ? 10 : s) + '%'
}


const passReg = []
passReg.push(/(?=.*[A-Z].*[A-Z])/)
passReg.push(/(?=.*[!@#$&*])/)
passReg.push(/(?=.*[0-9].*[0-9])/)
passReg.push(/(?=.*[a-z].*[a-z].*[a-z])/)
passReg.push(/.{8}/)

window.onload = function () {
    document.getElementById('id_password1').onkeyup = (e) => {
        if (e.target.value.length !== 0)
            visibleProcessBar(true)
        else
            visibleProcessBar(false)

        let count = 0
        for (let i = 0; i < passReg.length; i++) {
            if (new RegExp(passReg[i]).test(e.target.value) )
                count += 1
        }

        changeProcessBarStatus(count * 100 / 5 )
    }
}