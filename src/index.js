import './style.css'

function displayOnload(){
    let welcome = document.createElement('h1');
    let wrapper = document.querySelector('.wrapper');
    welcome.textContent = "WELCOME";
    welcome.className = "welcome";
    wrapper.appendChild(welcome);
}

window.onload(displayOnload());