const userTab = document.querySelector(".user-tab");
const userText = document.querySelector(".user-text");
const passwordTab = document.querySelector(".password-tab");
const passwordText = document.querySelector(".password-text");
const userSpan = document.querySelector(".user-span");
const passwordSpan = document.querySelector(".password-span");
const userI = document.querySelector(".fa-user");
const passwordI = document.querySelector(".fa-lock");
userText.addEventListener('focus' , ()=>{
    userTab.classList.add('active');
    userSpan.classList.add('active');
    userI.classList.add('active');
});
userText.addEventListener('blur' , ()=>{
    userTab.classList.remove('active');
    if(userText.value.length == 0){
        userSpan.classList.remove('active');
        userI.classList.remove('active');
    }            
})
passwordText.addEventListener('focus' , ()=>{
    passwordTab.classList.add('active');
    passwordSpan.classList.add('active');
    passwordI.classList.add('active');
});
passwordText.addEventListener('blur' , ()=>{  
    passwordTab.classList.remove('active');
    if(passwordText.value.length == 0){
        passwordSpan.classList.remove('active');
        passwordI.classList.remove('active');
    }           
})