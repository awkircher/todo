import { markDone, formSubmit, getValues } from './index.js';

const listContainer = document.querySelector("#listContainer");
const sideNav = document.querySelector("#sideNav");
const formContainer = document.querySelector("#formContainer");
const form = document.querySelector('#createNew');
const createButton = document.querySelector("#mainNew");

form.addEventListener('submit', formSubmit);

function showHideModal(element) {
    element.classList.toggle('hidden');
}
createButton.addEventListener('click', function() {
    showHideModal(formContainer);
});
formContainer.addEventListener('click', function(){
    showHideModal(formContainer);
});

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
}

function updateList(data) {
    console.log('you called updateList');
    clear(listContainer);
    data.forEach((todo, index) => {
        let parent = document.createElement('div');
        parent.setAttribute("data-index", `${index}`);
        parent.setAttribute("class", "listItem");
        parent.addEventListener("change", markDone);
        parent.addEventListener("click", editToDo);
        listContainer.appendChild(parent);
        
        let titleCont = document.createElement('div');
        titleCont.setAttribute("class", "titleContainer");
        let domTitle = document.createElement('h1');
        let domDescription = document.createElement('h2');
        let metaCont = document.createElement('div');
        metaCont.setAttribute("class", "metaContainer");
        let domPriority = document.createElement('p');
        let domDue = document.createElement('p');
        let domDone = document.createElement('input');

        parent.appendChild(titleCont);
        parent.appendChild(metaCont);
        
        titleCont.appendChild(domTitle);
        titleCont.appendChild(domDescription);
        metaCont.appendChild(domDue);
        metaCont.appendChild(domPriority);
        parent.appendChild(domDone);
        
        domTitle.textContent = todo.title;
        domDescription.textContent = todo.description;
        domDue.textContent = todo.due;
        domPriority.textContent = todo.priority;
        domDone.setAttribute("type", "checkbox");
    });
}

function updateNav(data) {
    clear(sideNav);
    let allListProps = {};
    data.forEach(todo => {
        let listName = todo.list;
        if (!allListProps.hasOwnProperty(`${listName}`)) {
            allListProps[`${listName}`] = true;
        }
        return allListProps;
    });
    for (const property in allListProps) {
        const item = document.createElement('div');
        sideNav.appendChild(item);
        item.setAttribute("id", `${property}`);
        item.textContent = `${property}`;
    }
}

function editToDo(event) {
    let todo = event.currentTarget;
    let index = todo.dataset.index;
    let data = getValues();
    let currentProps = data[index];
    console.log(currentProps);
//do the codes to create all these HTML elements and fill them with the currentProps values
    // <form id="createNew">
    //                 <h1>New To Do</h1>
    //                 <label>Title</label>
    //                 <input type="text" name="title"></input>
    //                 <label>Description</label>
    //                 <input type="text" name="description"></input>
    //                 <label>List</label>
    //                 <input type="text" name="list"></input>
    //                 <label>Priority</label>
    //                 <select name="priority" id="priority">
    //                     <option value="high">High</option>
    //                     <option value="medium">Medium</option>
    //                     <option value="low">Low</option>
    //                 </select>
    //                 <label>Due date</label>
    //                 <input type="date"></input>
    //                 <input type="button" value="Cancel" id="cancel" class="secondary"></input>
    //                 <input type="submit" value="Save" class="primary"></input>
    //             </form>
}

export { updateList, updateNav };