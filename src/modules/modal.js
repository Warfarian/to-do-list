export function modalInput() {
    const dueDateInput = document.getElementById('dueDate').value;
    const dueDate = new Date(dueDateInput);

    // Check if the dueDate is valid
    if (isNaN(dueDate.getTime())) {
        alert("Please enter a valid date.");
        return null; // Return null if the date is invalid
    }

    return {
        title: document.getElementById('title').value,
        description: document.getElementById('desc').value,
        dueDate: dueDate, // Store the Date object
        priority: document.getElementById('priority').value,
        notes: document.getElementById('notes').value,
    };
}
