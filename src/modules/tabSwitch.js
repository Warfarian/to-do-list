import { createElement } from './createElement';
import { modalInput } from './modal';

let activeProject = 'Default Project';
let projects = {
    'Default Project': []
};

export function createProj() {
    const sidebar = document.querySelector('.sidebar');
    let addProj = sidebar.querySelector('.addProjBtn');
    if (!addProj) {
        addProj = document.createElement('button');
        addProj.className = "addProjBtn";
        addProj.textContent = "Add New Project";
        sidebar.appendChild(addProj);

        addProj.addEventListener('click', () => {
            const newProjectName = prompt('Enter new project name:');
            if (newProjectName && !projects[newProjectName]) {
                addNewProjectTab(newProjectName);
            } else if (projects[newProjectName]) {
                alert('Project already exists!');
            }
        });
    }
}

function addNewProjectTab(projectName) {
    const sidebar = document.querySelector('.sidebar');
    let projectTab = document.createElement('li');
    projectTab.textContent = projectName;
    projectTab.classList.add('project-tab');
    
    projects[projectName] = [];

    projectTab.addEventListener('click', () => switchTab(projectName));
    sidebar.appendChild(projectTab);
    switchTab(projectName);
}
function switchTab(projectName) {
    if (activeProject === projectName) return;
    
    // Remove highlight from all tabs
    const allTabs = document.querySelectorAll('.project-tab');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Highlight the current tab
    const currentTab = Array.from(allTabs).find(tab => tab.textContent === projectName);
    if (currentTab) {
        currentTab.classList.add('active');
    }

    activeProject = projectName;
    displayList();
}
export function displayList() {
    const display = document.querySelector('.listArea');
    display.innerHTML = '';
    let taskHeader = document.createElement('h3');
    taskHeader.textContent = `Tasks for ${activeProject}`;
    display.appendChild(taskHeader);

    projects[activeProject].forEach(appendListToDOM);
}

export function appendListToDOM(item) {
    const display = document.querySelector('.listArea');
    const card = document.createElement('div');
    card.classList.add('list-item');
    card.innerHTML = `
        <div class="task-title">Task: ${item.title}</div>
        <div>Description: ${item.description}</div>
        <div>Date: ${item.dueDate.toLocaleDateString()}</div>
        <div>Priority: ${item.priority}</div>
        <div>Notes: ${item.notes}</div>
        <button class="edit">Edit</button>
        <button class="delete">X</button>
    `;

    card.querySelector('.edit').onclick = () => openEditModal(item);
    card.querySelector('.delete').onclick = () => deleteItem(item);

    display.appendChild(card);
}

function openEditModal(item) {
    const fields = ['title', 'desc', 'dueDate', 'priority', 'notes'];
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            element.value = field === 'dueDate' && item[field] instanceof Date 
                ? item[field].toISOString().split('T')[0] 
                : item[field];
        }
    });
    window.currentEditingTask = item;
    document.getElementById('popup').showModal();
}

export function deleteItem(item) {
    const index = projects[activeProject].indexOf(item);
    if (index !== -1) {
        projects[activeProject].splice(index, 1);
        displayList();
    } else {
        console.error('Item not found in the project list.');
    }
}

export function handleFormSubmission(event) {
    event.preventDefault();
    const newItem = modalInput();
    if (!newItem) return;

    if (window.currentEditingTask) {
        Object.assign(window.currentEditingTask, newItem);
        window.currentEditingTask = null;
    } else {
        projects[activeProject].push(new createElement(newItem.title, newItem.description, newItem.dueDate, newItem.priority, newItem.notes));
    }

    displayList();
    clearFormFields(); // Clear fields after submission
    document.getElementById('popup').close(); // Close modal after submission
}

export function clearFormFields() {
    ['title', 'desc', 'dueDate', 'priority', 'notes'].forEach(field => {
        const element = document.getElementById(field);
        if (element) element.value = '';
    });
}

export function initializeTodoList() {
    createProj();
    displayList();

    document.getElementById('submit').addEventListener('click', handleFormSubmission);
    document.querySelector('.listArea').addEventListener('click', (e) => {
        if (e.target.classList.contains('edit') || e.target.classList.contains('delete')) {
            const listItem = e.target.closest('.list-item');
            if (listItem) {
                const taskTitleElement = listItem.querySelector('.task-title'); // Adjust this selector as necessary
                
                // Check if taskTitleElement exists
                if (taskTitleElement) {
                    const taskTitle = taskTitleElement.textContent; // Now it's safe to access textContent
                    const item = projects[activeProject].find(task => task.title === taskTitle); // Find the corresponding task
                    
                    if (e.target.classList.contains('edit')) {
                        openEditModal(item);
                    } else if (e.target.classList.contains('delete')) {
                        deleteItem(item);
                    }
                } else {
                    console.error('Task title element not found.');
                }
            }
        }
    });
}