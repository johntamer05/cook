let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let confirmBtn = document.getElementById("confirmBtn");
let confirmABtn = document.getElementById("confirmABtn");
let nameField = document.getElementById("nameField");
let ageField = document.getElementById("ageField");
let usernameField = document.getElementById("usernameField");
let mobileField = document.getElementById("mobileField");
let passwordField = document.getElementById("passwordField");
let title = document.getElementById("title");


signinBtn.onclick = function(){
    nameField.style.display = "none";
    ageField.style.display = "none";
    usernameField.style.display = "none";
    mobileField.style.display = "none";
    passwordField.style.display = "none";
    signinBtn.style.display="flex";
    signinABtn.style.display="none";
    signupBtn.style.display="flex";
    signupABtn.style.display="none";
    confirmBtn.style.display="flex";
    confirmABtn.style.display="none";
    confirmBtn.style.maxWidth="250px";
    confirmBtn.style.marginLeft="0";
    signinBtn.style.marginRight="0";
    title.innerHTML = 'Sign In';
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    confirmBtn.classList.remove("disable");
}
signinABtn.onclick = function(){
    nameField.style.display = "none";
    ageField.style.display = "none";
    usernameField.style.display = "none";
    mobileField.style.display = "none";
    passwordField.style.display = "none";
    signinBtn.style.display="none";
    signinABtn.style.display="flex";
    signupBtn.style.display="none";
    signupABtn.style.display="flex";
    confirmBtn.style.display="none";
    confirmABtn.style.display="flex";
    confirmABtn.style.maxWidth="250px";
    confirmABtn.style.marginLeft="0";
    signinBtn.style.marginRight="0";
    title.innerHTML = 'Sign In Admin';
    signupABtn.classList.add("disable");
    signinABtn.classList.remove("disable");
    confirmABtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.display = "flex";
    ageField.style.display = "flex";
    usernameField.style.display = "flex";
    mobileField.style.display = "flex";
    passwordField.style.display = "flex";
    signinBtn.style.display="flex";
    signinABtn.style.display="none";
    signupBtn.style.display="flex";
    signupABtn.style.display="none";
    confirmBtn.style.display="none";
    confirmABtn.style.display="none";
    confirmBtn.style.maxWidth="0";
    title.innerHTML = 'Sign Up';
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}
signupABtn.onclick = function(){
    nameField.style.display = "flex";
    ageField.style.display = "flex";
    usernameField.style.display = "flex";
    mobileField.style.display = "flex";
    passwordField.style.display = "flex";
    signinBtn.style.display="none";
    signinABtn.style.display="flex";
    signupBtn.style.display="none";
    signupABtn.style.display="flex";
    AdminBtn.style.display="none";
    UserBtn.style.display="flex";
    confirmBtn.style.display="none";
    confirmABtn.style.display="none";
    confirmABtn.style.maxWidth="0";
    title.innerHTML = 'Sign Up Admin';
    signupABtn.classList.remove("disable");
    signinABtn.classList.add("disable");
}

AdminBtn.onclick = function(){
    nameField.style.display = "none";
    ageField.style.display = "none";
    usernameField.style.display = "none";
    mobileField.style.display = "none";
    passwordField.style.display = "none";
    confirmBtn.style.display="flex";
    UserBtn.style.display="flex";
    AdminBtn.style.display="none";
    signinBtn.style.display="none";
    signinABtn.style.display="flex";
    signupBtn.style.display="none";
    signupABtn.style.display="flex";
    confirmBtn.style.display="none";
    confirmABtn.style.display="flex";
    confirmBtn.style.maxWidth="250px";
    confirmBtn.style.marginLeft="0";
    signinBtn.style.marginRight="0";
    title.innerHTML = 'Sign In Admin';
    signupABtn.classList.add("disable");
    signinABtn.classList.remove("disable");
    confirmABtn.classList.remove("disable");
}
UserBtn.onclick = function(){
    nameField.style.display = "none";
    ageField.style.display = "none";
    usernameField.style.display = "none";
    mobileField.style.display = "none";
    passwordField.style.display = "none";
    UserBtn.style.display="none";
    AdminBtn.style.display="flex";
    signinBtn.style.display="flex";
    signinABtn.style.display="none";
    signupBtn.style.display="flex";
    signupABtn.style.display="none";
    confirmBtn.style.display="flex";
    confirmABtn.style.display="none";
    confirmBtn.style.maxWidth="250px";
    confirmBtn.style.marginLeft="0";
    signinBtn.style.marginRight="0";
    title.innerHTML = 'Sign In';
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    confirmBtn.classList.remove("disable");
}