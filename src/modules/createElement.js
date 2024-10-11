export function createElement(title,description,dueDate, priority, notes){
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.notes = notes;
}

export function List(){
    let theList = [
        createElement("touch grass", "touch some of that weird green stuff", "2024/10/11","high", "hehe"),
        createElement("Watch talk tuah podcast", "hawk tuah", "2024/11/16","high",""),
        createElement("Gyatt to study", "skibidi", "2024/12/26","high","hehe im michael jackson"),
    ];
}