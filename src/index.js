import './style.css';
import { initializeTodoList } from './modules/tabSwitch';

export function displayModal() {
    let modalBtn = document.querySelector('.add-task-button');
    let dialog = document.querySelector('#popup');
    
    modalBtn.addEventListener('click', () => {
        dialog.showModal();
    });
}

window.onload = () => {
    displayModal();
    initializeTodoList();
};