let keys = document.querySelectorAll('.keys');

let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let tabKey = document.querySelector('.tab_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
// let keyboard_wrapp = document.querySelector('.keyboard_wrapp');
let text_input = document.querySelector('.text');
let change_colors = document.querySelector('.change_light_colors');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights'); 
let keyboard_wrapp = document.querySelector('.keyboard_wrapp'); 


for(let i =0; i < keys.length; i++){
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}
window.addEventListener('keydown', function(fun){
    for(let i =0; i < keys.length;i++){
        if(fun.key == keys[i].getAttribute('keyname') || fun.key == keys[i].getAttribute('lowerCaseName')){
            keys[i].classList.add('active')
        }
        if(fun.code == 'Space'){
            spaceKey.classList.add('active')
        }
        if(fun.code == 'ShiftLeft'){
            shift_right.classList.remove('active')
        }
        if(fun.code == 'ShiftRight'){
            shift_left.classList.remove('active')
        }
        if(fun.code == 'CapsLock'){
            caps_lock_key.classList.toggle('active');
        }
        
    }
})
window.addEventListener('keyup', function(fun){
    for(let i =0; i<keys.length;i++){
        if(fun.key == keys[i].getAttribute('keyname') || fun.key == keys[i].getAttribute('lowerCaseName')){
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(fun.code == 'Space'){
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(fun.code == 'ShiftLeft'){
            shift_right.classList.remove('active');
            shift_right.classList.remove('remove');
        }
        if(fun.code == 'ShiftRight'){
            shift_left.classList.remove('active');
            shift_left.classList.remove('remove');
        }
        setTimeout(() => {
            keys[i].classList.remove('remove')
        },200)
    }
})

night_mode.addEventListener('click', function(){
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_colors.classList.toggle('active');
    for(let i =0; i<keys.length; i++){
            keys[i].classList.toggle('keys_night')
    }
})

colors_input.addEventListener('input', function(){
    for(let i =0; i<keys.length; i++){
        keys[i].style.color = colors_input.value
    }
    keyboard_lights.style.background = colors_input.value;
})