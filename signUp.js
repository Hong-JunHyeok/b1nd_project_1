const inputs = document.getElementsByClassName('form_input');


function init(){
    for(let i = 0; i < inputs.length;i++){
        inputs[i].addEventListener('focus',(event) => {
            event.target.style.boxShadow = "0px 1px 7px -1px rgba(183,222,75,1)";
        });
        
        inputs[i].addEventListener('blur',(event) => {
            event.target.style.boxShadow = "0px 1px 7px -1px rgba(68, 71, 90, 0.58)";
        });
    }
}
init();