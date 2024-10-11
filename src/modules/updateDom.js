import { modalInput } from "./modal";
import { List as createElement } from "./createElement.js"; 
export function updateDom(){
    let item;
}

const display = document.querySelector('.listArea');
let theList = []; // Initialize the task list

// Display all items in the list
function displayList() {
    display.innerHTML = ''; // Clear previous items
    for (let i = 0; i < theList.length; i++) {
        appendListToDOM(theList[i]);
    }
}



// Append a new item to the DOM
function appendListToDOM(item) {
    const cards = document.createElement('div');
    cards.classList.add('list-item');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = './assets/delete.png';
    deleteIcon.alt = 'Delete';
    deleteIcon.style.width = '20px'; // Set width if needed
    deleteIcon.style.cursor = 'pointer'; // Change cursor to pointer for better UX

    // Set card content
    cards.innerHTML = `
        <div>Task: ${item.title}</div>
        <div>Description: ${item.desc}</div>
        <div>Date: ${item.date}</div>
        <div>Priority: ${item.priority}</div>
        <div>Notes: ${item.notes}</div>
    `;

    cards.appendChild(deleteIcon); // Append delete icon to card

    // Add delete functionality
    deleteIcon.onclick = function() {
        deleteItem(item);
    };

    display.appendChild(cards);
}

// Event listener for the submit button
let submit = document.querySelector('#submit');
submit.addEventListener('click', function addToList(event) {
    event.preventDefault();
    
    // Get values from form fields
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let date = document.getElementById('date').value;
    let priority = document.getElementById('priority').value; // Corrected querySelector
    let notes = document.getElementById('notes').value; // Corrected querySelector

    // Create a new task element
    let addedElement = new createElement(title, desc, date, priority, notes);

    // Add the task to the list
    theList.push(addedElement);

    // Update the DOM with the new task
    appendListToDOM(addedElement);
});

// Function to delete an item
function deleteItem(item) {
    // Remove the item from the list
    theList = theList.filter(listItem => listItem !== item);
    
    // Re-display the list to reflect changes
    displayList();
}
