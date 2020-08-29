const sign_up_button = document.getElementById('js_sign_up');
const login_box = document.getElementById('login_form');

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

function init(){
    sign_up_button.addEventListener("click",handleLoginClick);
}

init();