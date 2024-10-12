import { modalInput } from "./modal"; 
import { createElement } from "./createElement";
const display = document.querySelector('.listArea');

// Initialize the task list globally
let theList = [];

// Populate the initial list of tasks
export function initializeList() {
    theList = [
        new createElement("touch grass", "touch some green", "2024-12-26", "high", "hehe"),
        new createElement("Gym", "legs", "2024-11-16", "high", ""),
        new createElement("30 days of swift", "study it", "2024-12-26", "high", "Swift"),
    ];
}

// Display all items in the list
export function displayList() { // Exported function
    display.innerHTML = ''; // Clear previous items
    for (let i = 0; i < theList.length; i++) {
        appendListToDOM(theList[i]);
    }
}

// Append a new item to the DOM
export function appendListToDOM(item) {
    const cards = document.createElement('div');
    cards.classList.add('list-item');

    const deleteIcon = document.createElement('p');
    deleteIcon.textContent = 'X' ;
    deleteIcon.className = "delete";
    deleteIcon.style.cursor = 'pointer'; // Change cursor to pointer for better UX

    const editIcon = document.createElement('p');
    editIcon.textContent = "edit";
    editIcon.className= "edit";
    editIcon.style.cursor = 'pointer';

    // Set card content
    cards.innerHTML = `
        <div>Task: ${item.title}</div>
        <div>Description: ${item.description}</div>
        <div>Date: ${item.dueDate.toLocaleDateString()}</div> <!-- Format date -->
        <div>Priority: ${item.priority}</div>
        <div>Notes: ${item.notes}</div>
    `;

    cards.appendChild(deleteIcon); // Append delete icon to card
    cards.appendChild(editIcon);

    editIcon.onclick = function(){
        openEditModal(item);
    }
    // Add delete functionality
    deleteIcon.onclick = function() {
        deleteItem(item);
    };

    display.appendChild(cards); // Append the card to the display area
}
// Function to open the edit modal and populate with task data

// Function to open the edit modal and populate it with task data
function openEditModal(item) {
    // Fill the form fields with the task details
    document.getElementById('title').value = item.title;
    document.getElementById('desc').value = item.description;
    document.getElementById('dueDate').value = item.dueDate;
    document.getElementById('priority').value = item.priority;
    document.getElementById('notes').value = item.notes;

    // Set the current task being edited
    currentEditingTask = item; // Store reference to the task being edited

    // Show the modal
    document.getElementById('popup').showModal();
}



// Function to delete an item
export function deleteItem(item) {
    // Remove the item from the list
    theList = theList.filter(listItem => listItem !== item);
    
    // Re-display the list to reflect changes
    displayList();
}

let currentEditingTask = null; // To store the current task being edited

// Function to handle form submission
// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Use modalInput to get new task data
    let newItem = modalInput();

    // Check if we are editing an existing task
    if (currentEditingTask) {
        // Update existing task properties
        currentEditingTask.title = newItem.title;
        currentEditingTask.description = newItem.description;
        currentEditingTask.dueDate = newItem.dueDate;
        if (!currentEditingTask.dueDate){
            console.error('enter valid date');
        }
        currentEditingTask.priority = newItem.priority;
        currentEditingTask.notes = newItem.notes;

        // Reset the editing task variable
        currentEditingTask = null; 
    } else {
        // Add the new item to the list
        theList.push(newItem);
    }

    // Display the updated list
    displayList();

    // Clear form fields after submission
    clearFormFields();
    
    // Close the modal after submission
    document.getElementById('popup').close();
}



// Function to clear form fields
export function clearFormFields() {
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('notes').value = '';
}

// Initialize the list and display it
initializeList();
displayList();

// Ensure the script runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', handleFormSubmission);
});



