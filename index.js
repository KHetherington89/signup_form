const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const sideMessageText = document.getElementById("sideMessageText");
const submit = document.getElementById("submit");
const required = document.getElementById("form").querySelectorAll("[required]")
const reqArray = Object.values(required);


passwordConfirm.addEventListener("input", ()=> passCheck());
password.addEventListener("input", ()=> passCheck());

function passCheck(){
    if(passwordConfirm.value != password.value){
        sideMessageText.innerText = "Your passwords do not match!"
        passwordConfirm.setCustomValidity("Your passwords do not match!")
    } 
    else{
        sideMessage.textContent = "";
        passwordConfirm.setCustomValidity("")
    }
}

reqArray.forEach(input => {
    input.addEventListener("input", () => validRelease());
})

function validRelease(){
    let allValid = reqArray.every((input) => {
        if(input.validity.valid){
            return true;
        }
    })
    console.log(allValid);
    if(allValid == true){
        submit.disabled = false;
    }
    else{
        submit.disabled = true;
    }
}

footer.innerHTML = `<a style="color:black; text-decoration:none" href="https://github.com/KHetherington89/signup_form">Copyright © ${new Date().getFullYear()} KHetherington89
<i class="fa fa-github" style="font-size:24p; color:black"></i></a>`