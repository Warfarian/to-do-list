export function createElement(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate); // Ensure dueDate is a Date object
    this.priority = priority;
    this.notes = notes;
}
