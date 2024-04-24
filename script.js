let gobackbtn = document.querySelector(".gobackbtn");
let close1 = document.querySelector(".close");
let logincard = document.querySelector(".logincard");
let btn = document.querySelector(".btn");
let email = document.getElementById("email");
let greenTimer = document.querySelector(".greenTimer");
let loginmess = document.querySelector(".loginmess");
let facebook = document.querySelector(".facebook");
let google = document.querySelector(".google");

close1.addEventListener("click", () => {
    gobackbtn.style.display = "flex";
    logincard.style.display = "none";
});

gobackbtn.addEventListener("click", () => {
    gobackbtn.style.display = "none";
    logincard.style.display = "flex";
});

let elements = [btn, facebook, google];

function handleClick() {
    let inputValue = email.value.trim();
    if (inputValue !== "") {
        loginmess.style.display = "flex";
    } else {
        alert("Please Enter Your Email");
        email.focus();
    }
}

elements.forEach(element => {
    if (element) {
        element.addEventListener("click", handleClick);
    }
});

greenTimer.addEventListener('animationend', () => {
    loginmess.style.display = "none";
    location.reload();
});
