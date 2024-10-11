import { List } from "./modules/createElement";

export function displayOnload(){
    let welcome = document.createElement('h1');
    let wrapper = document.querySelector('.wrapper');
    welcome.textContent = "WELCOME";
    welcome.className = "welcome";
    
    // let itemCard = document.createElement('div');
    
    wrapper.appendChild(welcome);
}
