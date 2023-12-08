let form=document.getElementById("form");
let userName=document.getElementById("user");
let mail=document.querySelector("#email");
let password=document.querySelector("#paswrd01");
let confirmPassword=document.querySelector("#paswrd02");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  validateInputs();
})

function validateInputs(){
  let userNameVal=userName.value.trim();
  let mailVal=mail.value.trim();
  let passwordVal=password.value.trim();
  let confirmPasswordVal=confirmPassword.value.trim();

if(userNameVal===""){
  setError(userName,"username is required");
}
else if(userNameVal.length<6){
  setError(userName,"username must be atleast 6 characters");
}
else{
  setSuccess(userName);  
}


if(mailVal===""){
  setError(mail,"mail is required");
}
else if(!validateEmail(mailVal)){
  setError(mail,"please enter a valid mail");
}
else{
  setSuccess(mail);
}

if(passwordVal===""){
  setError(password,"Password is required");
}
else if(passwordVal.length<8){
  setError(password,"Password must be atleast 8 characters");
}
else{
  setSuccess(password); 
}

if(confirmPasswordVal===""){
  setError(confirmPassword,"Password is required");
}
else if(confirmPasswordVal!==passwordVal){
  setError(confirmPassword,"Password does not match");
}
else{
  setSuccess(confirmPassword); 
}

}

function setError(element,message){
  let inputGroup=element.parentElement;
  let errorElement=inputGroup.querySelector("small");
  inputGroup.className="formSign error";
  errorElement.innerText=message;
}

function setSuccess(element,message){
  let inputGroup=element.parentElement;
  let errorElement=inputGroup.querySelector("small");
  inputGroup.className="formSign success"; 
  errorElement.innerText=message;
}


function validateEmail(mail) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}