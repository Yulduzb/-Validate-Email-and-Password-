
const form1=document.getElementById("form1"),
next1=document.getElementById("next1"),

form2=document.getElementById("form2"),
back1=document.getElementById("back1"),
next2=document.getElementById("next2"),

form3=document.getElementById("form3"),
back2=document.getElementById("back2"),
progress=document.getElementById("progress");

const emailField=document.querySelector(".email-field"),
emailInput=document.querySelector(".email"),
passField=document.querySelector(".create-password"),
passInput=document.querySelector(".password"),
cPassField=document.querySelector(".confirm-password"),
cPassInput=document.querySelector(".cPassword");


next1.addEventListener("click", () =>{
   form1.style.left= "-450px";
   form2.style.left= "40px";
   progress.style.width="240px";
   
});

back1.addEventListener("click", () =>{
    form1.style.left= "40px";
    form2.style.left= "450px";
    progress.style.width="120px";
  
   
 });

 next2.addEventListener("click", () =>{
    form2.style.left= "-450px";
    form3.style.left= "40px";
    progress.style.width="360px";
    smallText.forEach((smallElement, index) => {
        if (index === 3) {
         smallElement.style.color="#fff";
        }
       
       });
    

 });
 back2.addEventListener("click", () =>{
    form2.style.left= "40px";
    form3.style.left= "450px";
    progress.style.width="240px";
    
 });






//email validation
function checkEmail(){
    const emailpattern=/^[^ ]+[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailpattern)){
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");

}


//Hide and show password

const eyeIcons=document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
eyeIcon.addEventListener("click", () => {
    const pInput=eyeIcon.parentElement.querySelector("input");
    if(pInput.type==="password"){
        eyeIcon.classList.replace("bx-hide", "bx-show");
       return (pInput.type="text");
    }else
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type="password";
  
})
});



//Password validation
function createPass(){
    const passPattern=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$>%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(!passInput.value.match(passPattern)){
      return  passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}


//confirm Function

function confirmPass(){
    if(passInput.value !== cPassInput.value || cPassInput.value===""){
     return cPassField.classList.add("invalid");
    }
     cPassField.classList.remove("invalid");
}




//calling function on form submit

form3.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();


    //calling function on key up
emailInput.addEventListener("keyup",checkEmail);
passInput.addEventListener("keyup",createPass);
cPassInput.addEventListener("keyup",confirmPass);


if(
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
){
    location.href=form3.getAttribute("action");
}
});



