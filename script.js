// if you see this i adore you
function openMenu (){
    var menu = document.querySelectorAll(".menu"); 
    for(let i = 0; i < menu.length; i++){
        menu[i].style.visibility = "visible";
    }
    var start = document.querySelector("#start_button");
    start.style.visibility = "hidden";

}   

function closeAkiIntro(){
    var intro = document.querySelector(".aki_intro");
    intro.style.visibility = "hidden";
}
let loginForm = document.querySelector("#login-form");
function displayLoginForm () {
    
    loginForm.style.visibility = "visible";
    start_button.style.visibility = "hidden";

}

function hideLoginForm(){
    loginForm.style.visibility = "hidden";
}

start_button.addEventListener("click", displayLoginForm);


// button to close the intro menu (i'm going to move the carrd to probably the "about" page so ignore this code i am moving it later on)
/*var x_button = document.querySelector("#x_button")
x_button.addEventListener("click", closeAkiIntro);*/

// function to change front page colors + openMenu
function changeColor() {
        // select each element
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    var coded = document.querySelector("#coded_by");
    var background = document.querySelector("body");
    var start_button = document.querySelector("#start_button");

        // if username and password are correct, turn blue and return true
    if(username.value == "aki" && password.value == "iloveyoulisa" || username.value == "lisa" && password.value == "123"){
        //set colors to blue
        coded.style.color = "lightblue";
        start_button.style.borderColor = "lightblue";
        background.style.backgroundImage = "url('images/eldenringblue.png')";
        openMenu();
        hideLoginForm();

       /* //allow user to click button
        var button = document.querySelector("#start_button");
        button.addEventListener("click", openMenu); 
        return 1; */

        // else turn red and return false
    } else {
        coded.style.color = "red";
        start_button.style.borderColor = "red";
        background.style.backgroundImage = "url('images/eldenringred.png')";
        username.value = "";
        password.value = "";
        return;
    }
}

// check for password change, initiate changeColor function
var passwordInput = document.querySelector("#password");
passwordInput.addEventListener("change", changeColor);

