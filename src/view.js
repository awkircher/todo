import { markDone, formSubmit, showModal } from './index.js';

const listContainer = document.querySelector("#listContainer");
const sideNav = document.querySelector("#sideNav");
const formContainer = document.querySelector("#formContainer");
const form = document.querySelector('#createNew');
const createButton = document.querySelector("#mainNew");

form.addEventListener('submit', formSubmit);
createButton.addEventListener('click', function() {
    showModal(formContainer);
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

export { updateList, updateNav };