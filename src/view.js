import { markDone, formSubmit, getValues, editSubmit } from './index.js';

const listContainer = document.querySelector("#listContainer");
const sideNav = document.querySelector("#sideNav");
const formContainer = document.querySelector("#formContainer");
const createButton = document.querySelector("#mainNew");

function showHideModal(element) {
    element.classList.toggle('hidden');
}

createButton.addEventListener('click', function() {
    createToDo();
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
    clear(formContainer);
    let todo = event.currentTarget;
    let index = todo.dataset.index;
    let data = getValues();
    let currentProps = data[index];
    console.log(currentProps);

    const form = document.createElement('form');
    form.addEventListener("submit", function(event) {
        console.log('you hit submit');
        editSubmit(event, index);
    });
    const header = document.createElement('h1');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input')
    const descLabel = document.createElement('label');
    const descInput = document.createElement('input');
    const listLabel = document.createElement('label');
    const listInput = document.createElement('input')
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    const optHigh = document.createElement('option');
    const optMed = document.createElement('option');
    const optLow = document.createElement('option');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input')
    const cancelButton = document.createElement('input')
    const submitButton = document.createElement('input')

    form.setAttribute("id", "edit");
    header.textContent="Edit To Do";
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", currentProps.title);
    descInput.setAttribute("type", "text");
    descInput.setAttribute("value", currentProps.description);
    listInput.setAttribute("type", "text");
    listInput.setAttribute("value", currentProps.list);
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("value", currentProps.due);
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "Cancel");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Save");

    formContainer.appendChild(form);
    form.appendChild(header);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(listLabel);
    form.appendChild(listInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect)
    prioritySelect.appendChild(optHigh);
    prioritySelect.appendChild(optMed);
    prioritySelect.appendChild(optLow);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(cancelButton);
    form.appendChild(submitButton);
}

function createToDo() {
    clear(formContainer);
    const form = document.createElement('form');
    const header = document.createElement('h1');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input')
    const descLabel = document.createElement('label');
    const descInput = document.createElement('input');
    const listLabel = document.createElement('label');
    const listInput = document.createElement('input')
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    const optHigh = document.createElement('option');
    const optMed = document.createElement('option');
    const optLow = document.createElement('option');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input')
    const cancelButton = document.createElement('input')
    const submitButton = document.createElement('input')

    form.setAttribute("id", "create");
    header.textContent="New To Do";
    titleInput.setAttribute("type", "text");
    descInput.setAttribute("type", "text");
    listInput.setAttribute("type", "text");
    dueDateInput.setAttribute("type", "date");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "Cancel");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Save");

    formContainer.appendChild(form);
    form.appendChild(header);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(listLabel);
    form.appendChild(listInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect)
    prioritySelect.appendChild(optHigh);
    prioritySelect.appendChild(optMed);
    prioritySelect.appendChild(optLow);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    form.addEventListener("submit", formSubmit);
}

export { updateList, updateNav };