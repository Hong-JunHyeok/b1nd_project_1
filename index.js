const sign_in_button = document.getElementById('js_sign_in');
const sign_up_button = document.getElementById('js_sign_up');
const login_box = document.getElementById('login_form');
const submit = document.getElementById('submit');

login_box.style.display = "none";
let flag = 1;

function handleLoginClick(){
    flag *= -1;
    if(flag == -1){
        login_box.style.display = "flex";
    }
    else{
        login_box.style.display = "none";
    }
}

function handleSignUpClick(){
    window.open("main.html","_self");
}

function handleSubmit(){

}

function init(){
    sign_in_button.addEventListener("click",handleLoginClick);
    sign_up_button.addEventListener("click",handleSignUpClick);
    submit.addEventListener('submit',handleSubmit);
}

init();