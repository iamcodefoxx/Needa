var windowLocation = window.location.pathname; 

switch(windowLocation){
  case "/":
    var indexJS = document.createElement('script');
    indexJS.type = "text/javascript";
    indexJS.src = "/js/index.js";
    document.body.append(indexJS);
    break;  
  case "/register":
    var registerJS = document.createElement('script');
    registerJS.type = "text/javascript";
    registerJS.src = "/js/register.js";
    document.body.append(registerJS);
    break;
  case "/auth/register":
    var registerJS = document.createElement('script');
    registerJS.type = "text/javascript";
    registerJS.src = "/js/register.js";
    document.body.append(registerJS);
    break;
  case "/login":
    var loginJS = document.createElement('script');
    loginJS.type = "text/javascript";
    loginJS.src = "/js/login.js";
    document.body.append(loginJS);
    break;
  case "/auth/login":
    var loginJS = document.createElement('script');
    loginJS.type = "text/javascript";
    loginJS.src = "/js/login.js";
    document.body.append(loginJS);
    break; 
  case "/password-reset":
    var passwordResetJS = document.createElement('script');
    passwordResetJS.type = "text/javascript";
    passwordResetJS.src = "/js/password-reset.js";
    document.body.append(passwordResetJS);
    break;
  case "/auth/password-reset":
    var passwordResetJS = document.createElement('script');
    passwordResetJS.type = "text/javascript";
    passwordResetJS.src = "/js/password-reset.js";
    document.body.append(passwordResetJS);
    break;
  case "/auth/update-password":
    var passwordResetUpdateJS = document.createElement('script');
    passwordResetUpdateJS.type = "text/javascript";
    passwordResetUpdateJS.src = "/js/password-reset-update.js";
    document.body.append(passwordResetUpdateJS);
    break;
  case "/settings":
    var settingsJS = document.createElement('script');
    settingsJS.type = "text/javascript";
    settingsJS.src = "/js/settings.js";
    document.body.append(settingsJS);
    break;
  case "/auth/settings":
    var settingsJS = document.createElement('script');
    settingsJS.type = "text/javascript";
    settingsJS.src = "/js/settings.js";
    document.body.append(settingsJS);
}

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// DROPDOWN MENU

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

// COOKIES MESSAGE
setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach(val => {
    if(val.indexOf(name) === 0) value = val.substring(name.length);
  })

  return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies").style.display = "none";
  setCookie("cookie", true, 90);
})

cookieMessage = () => {
  if(!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);

// HIDE NAVIGATION MENU ON SCROLL

window.addEventListener('scroll', () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
})

// var result = document.getElementById("json-result");
// const Http = new XMLHttpRequest();
// function getLocation() {
//     console.log("getLocation Called");
//     var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"

//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             bdcApi = bdcApi
//                 + "?latitude=" + position.coords.latitude
//                 + "&longitude=" + position.coords.longitude
//                 + "&localityLanguage=en";
//             getApi(bdcApi);

//         },
//         (err) => { getApi(bdcApi); },
//         {
//             enableHighAccuracy: true,
//             timeout: 5000,
//             maximumAge: 0
//         });
// }

// function getApi(bdcApi) {
//     Http.open("GET", bdcApi);
//     Http.send();
//     Http.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // result.innerHTML = this.responseText;
//             console.log(this.responseText);
//         }
//     };
// }
