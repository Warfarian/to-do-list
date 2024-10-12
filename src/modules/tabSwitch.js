let activeProject = 'Default Project'; // Keeps track of the active project
let projects = {
    'Default Project': [] // Store tasks for each project
};

// Create a new project and handle tab switching
export function createProj() {
    const sidebar = document.getElementsByClassName('sidebar')[0];

    // Check if the "Add New Project" button exists before creating it
    let addProj = document.querySelector('.addProjBtn');
    if (!addProj) {
        addProj = document.createElement('button');
        addProj.className = "addProjBtn";
        addProj.textContent = "Add New Project";
        sidebar.appendChild(addProj);

        // Add click event to create a new project tab
        addProj.addEventListener('click', () => {
            const newProjectName = prompt('Enter new project name:');
            if (newProjectName) {
                addNewProjectTab(newProjectName);
            }
        });
    }
}

// Function to add a new project tab and switch to it
function addNewProjectTab(projectName) {
    const sidebar = document.getElementsByClassName('sidebar')[0];

    // Create a new project tab in the sidebar
    let projectTab = document.createElement('li');
    projectTab.textContent = projectName;
    projectTab.classList.add('project-tab');
    
    // Add the new project to the projects object
    if (!projects[projectName]) {
        projects[projectName] = [];
    }

    // Add click event to switch between project tabs
    projectTab.addEventListener('click', () => {
        switchTab(projectName);
    });

    sidebar.appendChild(projectTab);

    // Automatically switch to the new project tab
    switchTab(projectName);
}

// Function to switch between project tabs
function switchTab(projectName) {
    if (activeProject === projectName) return; // Prevent switching to the same project

    activeProject = projectName;

    // Update the display area with tasks for the selected project
    const display = document.querySelector('.listArea');
    display.innerHTML = ''; // Clear previous tasks

    let taskHeader = document.createElement('h3');
    taskHeader.textContent = `Tasks for ${projectName}`;
    display.appendChild(taskHeader);

    // Display tasks for the active project
    const tasks = projects[projectName];
    tasks.forEach(task => appendTaskToDOM(task));

    // Update task form for the current project
    updateTaskForm();
}

// Function to append a task to the DOM
function appendTaskToDOM(task) {
    const display = document.querySelector('.listArea');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('list-item');

    taskDiv.innerHTML = `
        <div>Task: ${task.title}</div>
        <div>Description: ${task.description}</div>
        <div>Date: ${task.dueDate}</div>
        <div>Priority: ${task.priority}</div>
        <div>Notes: ${task.notes}</div>
    `;

    display.appendChild(taskDiv);
}

// Handle adding tasks to the active project
function handleFormSubmission(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;

    if (!title || !description || !dueDate) {
        alert('Please fill in all required fields.');
        return;
    }

    const newTask = { title, description, dueDate, priority, notes };

    // Add task to the active project's task list
    projects[activeProject].push(newTask);

    // Update the display with the new task
    appendTaskToDOM(newTask);

    // Clear the form fields after submission
    clearFormFields();
}

// Function to clear form fields after adding a task
function clearFormFields() {
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('notes').value = '';
}

// Function to update the form for task submission to the current project
function updateTaskForm() {
    const submitButton = document.getElementById('submit');
    submitButton.onclick = handleFormSubmission;
}

// Initialize the default project and setup the task form
function initializeDefaultProject() {
    const defaultProject = document.querySelector('.sidebar ul li');
    if (defaultProject) {
        defaultProject.addEventListener('click', () => switchTab('Default Project'));
    }
}

// Ensure the default project is initialized and task form is ready
initializeDefaultProject();
createProj();
updateTaskForm();
