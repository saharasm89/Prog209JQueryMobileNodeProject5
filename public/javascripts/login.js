let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-button");
let hidcontent = document.getElementById("hidden-main-content");
hidcontent.style.display ="none";
loginButton.addEventListener("click",function(){
    loginForm.style.display = "none";
    hidcontent.style.display ="block";
});