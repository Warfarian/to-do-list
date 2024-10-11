import './style.css';
import { createElement } from './modules/createElement';
import { displayOnload } from './modules/defaultPage';
import { List } from './modules/createElement';
import { modalInput } from './modules/modal';
import { updateDom, displayList, appendListToDOM } from './modules/updateDom';

function displayModal() {
    let modalBtn = document.querySelector('.newTaskBtn');
    let dialog = document.querySelector('#popup');
    
    modalBtn.addEventListener('click', () => {
        dialog.show(); // Show the dialog when the button is clicked
    });

    console.log('working');
}

window.onload(displayOnload(),displayModal());
