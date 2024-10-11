import './style.css';
import { createElement } from './modules/createElement';
import { displayOnload } from './defaultPage';
import { List } from './modules/createElement';
import { createModal } from './modal';

// Event listener for form submission
let submit = document.querySelector('#submit');
submit.addEventListener('click', function addToList(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let date = document.getElementById('date').value;
    let priority = document.querySelector("priority").value;
    let notes = document.querySelector("notes").value;

    let addedElement = new createElement(title, desc, date, priority, notes);
    theList.push(addedElement);
    appendBookToDOM(addedElement);
});


// Display container
const display = document.querySelector('.listArea');

// Function to display the entire library on page load
function displayList() {
    for (let i = 0; i < theList.length; i++) {
        addToList(theList[i]);
    }
}

// Function to append a item to the DOM
function appendListToDOM(item) {
    const cards = document.createElement('div');
    cards.classList.add('list-item');
    };

    const deleteIcon = document.createElement('img');
    deleteIcon.src = './assets/delete.png'; 
    deleteIcon.alt = 'Delete';
    deleteIcon.style.width = '20px'; // Set width if needed
    deleteIcon.style.cursor = 'pointer'; // Change cursor to pointer for better UX

    // Add event listener for the delete icon
    deleteIcon.onclick = function() {
        deleteItem(item);
    };

    // Set card content
    cards.innerHTML = `Task: ${item.name}, Description: ${item.desc}, Date: ${item.date}, Priority: ${item.priority}`;
    cards.appendChild(deleteIcon); // Append delete icon to card
    display.appendChild(cards);


window.onload(displayOnload());