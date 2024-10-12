export function createProj(){
    const sidebar = document.getElementsByClassName('sidebar')[0];
    let addProj = document.createElement('button');
    addProj.className = "addProjBtn";
    addProj.textContent = "Add New Project";
    sidebar.appendChild(addProj);
    return addProj, sidebar;
 }



