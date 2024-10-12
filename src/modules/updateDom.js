// import { modalInput } from "./modal"; 
// import { createElement } from "./createElement";

// const display = document.querySelector('.listArea');

// // Initialize the task list globally
// let theList = [];

// // Populate the initial list of tasks
// export function initializeList() {
//     theList = [
//         new createElement("Touch grass", "Touch some green", new Date("2024-12-26"), "high", "hehe"),
//         new createElement("Gym", "Legs", new Date("2024-11-16"), "high", ""),
//         new createElement("30 days of Swift", "Study it", new Date("2024-12-26"), "high", "Swift"),
//     ];
// }

// // Display all items in the list
// export function displayList() {
//     display.innerHTML = ''; // Clear previous items
//     theList.forEach(appendListToDOM);
// }

// // Append a new item to the DOM
// export function appendListToDOM(item) {
//     const card = document.createElement('div');
//     card.classList.add('list-item');

//     const deleteIcon = createIcon('X', 'delete');
//     const editIcon = createIcon('Edit', 'edit');

//     card.innerHTML = `
//         <div>Task: ${item.title}</div>
//         <div>Description: ${item.description}</div>
//         <div>Date: ${item.dueDate.toLocaleDateString()}</div>
//         <div>Priority: ${item.priority}</div>
//         <div>Notes: ${item.notes}</div>
//     `;

//     card.appendChild(deleteIcon);
//     card.appendChild(editIcon);

//     editIcon.onclick = () => openEditModal(item);
//     deleteIcon.onclick = () => deleteItem(item);

//     display.appendChild(card);
// }

// function createIcon(text, className) {
//     const icon = document.createElement('span');
//     icon.textContent = text;
//     icon.className = className;
//     icon.style.cursor = 'pointer';
//     return icon;
// }

// let currentEditingTask = null;

// function openEditModal(item) {
//     const fields = ['title', 'desc', 'dueDate', 'priority', 'notes'];
//     fields.forEach(field => {
//         const element = document.getElementById(field);
//         if (element) {
//             element.value = item[field] instanceof Date 
//                 ? item[field].toISOString().split('T')[0] 
//                 : item[field];
//         }
//     });
//     currentEditingTask = item;
//     const popup = document.getElementById('popup');
//     if (popup) {
//         popup.showModal();
//     }
// }

// export function deleteItem(item) {
//     theList = theList.filter(listItem => listItem !== item);
//     displayList();
// }

// function handleFormSubmission(event) {
//     event.preventDefault();
//     const newItem = modalInput();
//     if (!newItem) return;

//     if (currentEditingTask) {
//         Object.assign(currentEditingTask, newItem);
//         currentEditingTask = null;
//     } else {
//         theList.push(new createElement(newItem.title, newItem.description, newItem.dueDate, newItem.priority, newItem.notes));
//     }

//     displayList();
//     clearFormFields();
//     const popup = document.getElementById('popup');
//     if (popup) {
//         popup.close();
//     }
// }

// export function clearFormFields() {
//     ['title', 'desc', 'dueDate', 'priority', 'notes'].forEach(field => {
//         const element = document.getElementById(field);
//         if (element) {
//             element.value = '';
//         }
//     });
// }

// // Initialize the list and display it
// initializeList();
// displayList();

// // Ensure the script runs after the DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     const submitButton = document.querySelector('#submit');
//     if (submitButton) {
//         submitButton.addEventListener('click', handleFormSubmission);
//     }

//     // Add event listeners for edit and delete buttons on existing tasks
//     document.addEventListener('click', (e) => {
//         if (e.target.classList.contains('edit')) {
//             const listItem = e.target.closest('.list-item');
//             if (listItem) {
//                 const index = Array.from(listItem.parentNode.children).indexOf(listItem);
//                 openEditModal(theList[index]);
//             }
//         } else if (e.target.classList.contains('delete')) {
//             const listItem = e.target.closest('.list-item');
//             if (listItem) {
//                 const index = Array.from(listItem.parentNode.children).indexOf(listItem);
//                 deleteItem(theList[index]);
//             }
//         }
//     });
// });