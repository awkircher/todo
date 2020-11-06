import { formSubmit, getActiveValues, getActiveLists, editSubmit } from './index.js';

const listContainer = document.querySelector("#listContainer");
const sideNav = document.querySelector("#sideNav");
const formContainer = document.querySelector("#formContainer");
const createButton = document.querySelector("#mainNew");

function showHide(element) {
    element.classList.toggle('hidden');
}

function show(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
}

function hide(element) {
    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
}

createButton.addEventListener('click', function() {
    createToDo();
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
        parent.setAttribute("data-action", "edit");
        parent.setAttribute("class", "listItem");
        listContainer.appendChild(parent);
        
        let titleCont = document.createElement('div');
        titleCont.setAttribute("class", "titleContainer");
        let domTitle = document.createElement('h1');
        let domDescription = document.createElement('h2');
        let metaCont = document.createElement('div');
        metaCont.setAttribute("class", "metaContainer");
        let domPriority = document.createElement('img');
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
        function priorityIcon(level) {
            let file;
            if (level === "High") {
                file = "images/high.svg";
            } else if (level === "Medium") {
                file = "images/med.svg";
            } else {
                file = "images/low.svg";
            }
            return file;
        }
        let path = priorityIcon(todo.priority);
        domPriority.setAttribute("src", path);
        domDone.setAttribute("type", "checkbox");
        domDone.setAttribute("data-action", "markDone");
    });
}

function updateNav() {
    clear(sideNav);
    let activeListProps = getActiveLists();
    for (const property in activeListProps) {
        const item = document.createElement('div');
        sideNav.appendChild(item);
        item.setAttribute("id", `${property}`);
        item.textContent = `${property}`;
    }
}

function updateAutocomplete(list) {
    const container = document.querySelector("#autoContainer");
    clear(container);
    list.forEach(item => {
        const a = document.createElement('div');
        container.appendChild(a);
        a.setAttribute("class", "auto");
        a.setAttribute("data-action", "selectMatch");
        a.textContent = `${item}`;
    });
}

function fillSelection(value) {
    const input = document.querySelector("input[data-action='auto']");
    input.value = value;
}

function editToDo(element) {
    clear(formContainer);
    let todo = element;
    let index = todo.dataset.index;
    let data = getActiveValues();
    let currentProps = data[index];

    const form = document.createElement('form');
    form.addEventListener("submit", function(event) {
        editSubmit(event, index);
    });
    const header = document.createElement('h1');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const descLabel = document.createElement('label');
    const descInput = document.createElement('input');
    const listLabel = document.createElement('label');
    const listInput = document.createElement('input')
    const autocompleteDisplay = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    const optHigh = document.createElement('option');
    const optMed = document.createElement('option');
    const optLow = document.createElement('option');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');
    const cancelButton = document.createElement('input');
    cancelButton.addEventListener('click', function() {
        showHide(formContainer);
    });
    const submitButton = document.createElement('input');

    form.setAttribute("id", "edit");
    header.textContent="Edit To Do";
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", currentProps.title);
    titleLabel.textContent = "Title";
    descInput.setAttribute("type", "text");
    descInput.setAttribute("value", currentProps.description);
    descLabel.textContent = "Description";
    listInput.setAttribute("type", "text");
    listInput.setAttribute("value", currentProps.list);
    listInput.setAttribute("data-action", "auto");
    listLabel.textContent = "List";
    autocompleteDisplay.setAttribute("id", "autoContainer");
    autocompleteDisplay.setAttribute("class", "hidden");
    optHigh.textContent = "High";
    optMed.textContent = "Medium";
    optLow.textContent = "Low";
    priorityLabel.textContent = "Priority";
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("value", currentProps.due);
    dueDateLabel.textContent = "Due date";
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "Cancel");
    cancelButton.setAttribute("class", "secondary");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Save");
    submitButton.setAttribute("class", "primary");

    function selectPriority(level) {
        let selected;
        if (level === "High") {
            selected = optHigh;
        } else if (level === "Medium") {
            selected = optMed;
        } else {
            selected = optLow;
        }
        return selected;
    }

    const optionElement = selectPriority(currentProps.priority);
    optionElement.setAttribute("selected", true);

    formContainer.appendChild(form);
    form.appendChild(header);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(listLabel);
    form.appendChild(listInput);
    form.appendChild(autocompleteDisplay);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect)
    prioritySelect.appendChild(optHigh);
    prioritySelect.appendChild(optMed);
    prioritySelect.appendChild(optLow);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    showHide(formContainer);
}

function createToDo() {
    clear(formContainer);
    let data = getActiveValues();
    let value = data[0].list;

    const form = document.createElement('form');
    form.addEventListener("submit", formSubmit);
    const header = document.createElement('h1');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input')
    const descLabel = document.createElement('label');
    const descInput = document.createElement('input');
    const listLabel = document.createElement('label');
    const listInput = document.createElement('input');
    const autocompleteDisplay = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    const optHigh = document.createElement('option');
    const optMed = document.createElement('option');
    const optLow = document.createElement('option');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input')
    const cancelButton = document.createElement('input')
    cancelButton.addEventListener("click", function() { 
        showHide(formContainer);
    });
    const submitButton = document.createElement('input')

    form.setAttribute("id", "create");
    header.textContent="New To Do";
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("required", true);
    titleLabel.textContent = "Title";
    descInput.setAttribute("type", "text");
    descLabel.textContent = "Description";
    listInput.setAttribute("type", "text");
    listInput.setAttribute("value", value);
    listInput.setAttribute("data-action", "auto");
    listLabel.textContent = "List";
    autocompleteDisplay.setAttribute("id", "autoContainer");
    autocompleteDisplay.setAttribute("class", "hidden");
    optHigh.textContent = "High";
    optMed.textContent = "Medium";
    optLow.textContent = "Low";
    priorityLabel.textContent = "Priority";
    dueDateInput.setAttribute("type", "date");
    dueDateLabel.textContent = "Due date";
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "Cancel");
    cancelButton.setAttribute("class", "secondary");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Save");
    submitButton.setAttribute("class", "primary");

    formContainer.appendChild(form);
    form.appendChild(header);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(listLabel);
    form.appendChild(listInput);
    form.appendChild(autocompleteDisplay);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect)
    prioritySelect.appendChild(optHigh);
    prioritySelect.appendChild(optMed);
    prioritySelect.appendChild(optLow);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    showHide(formContainer);
}

export { updateList, updateNav, editToDo, showHide, show, hide, updateAutocomplete, fillSelection };