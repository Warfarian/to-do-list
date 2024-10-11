import './style.css';
import { createElement } from './modules/createElement';
import { displayOnload } from './modules/defaultPage';
import { modalInput } from './modules/modal';
import { updateDom, displayList, appendListToDOM } from './modules/updateDom';

// index.js 

function displayModal() {
    let modalBtn = document.querySelector('.add-task-button');
    let dialog = document.querySelector('#popup');
    
    modalBtn.addEventListener('click', () => {
        dialog.show(); // Show the dialog when the button is clicked
    });
}

// Corrected window.onload syntax
window.onload = () => {
    displayModal();
};
