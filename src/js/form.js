"use strict";

const form_header = document.getElementById('form-header');
const form_Body = document.getElementById('form-body');
const btn = document.getElementById('btn');
const imput = form_Body.querySelectorAll('.form-control');
const windowOne = document.getElementById('windowOne');
const windiwTwo = document.getElementById('windowTwo');
const thank = document.getElementById('thank');
const form_btn_group = document.getElementById('form-btn-group');


btn.addEventListener('click', () => {
    check();
});



function check() {
    let error = document.querySelectorAll('.error');
    imput.forEach(element => {
        if (element.value == '') {
            element.classList.add('error');
        } else if (error.length == 0) {
            window();
        } else if (btn.innerText == 'Оплатить' || error.length == 0) {
            console.log(1)
            form_header.classList.add('disabled');
            windowTwo.classList.add('disabled');
            thank.classList.remove('disabled');
            form_btn_group.classList.add('disabled');
            form_Body.classList.add('form-body_thank');
        } else {
            element.classList.remove('error');
        }
    })
}

function window() {
    windowOne.classList.add('disabled');
    windiwTwo.classList.remove('disabled');
    btn.innerText = 'Оплатить';
}