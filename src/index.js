import { ToDo } from './ToDo.js';
import { updateList, updateNav, editToDo, showHide, show, hide, updateAutocomplete, fillSelection } from './view.js';
import { Data } from './database.js';
//import { getTestData } from './testData.js'

function generateId() {
    const data = Data.get();
    let id = data.length;
    return id++;
}

function getActiveValues() {
    return Data.getActive();
}

function getLists() { //returns a de-duplicated list of list names
    let data = Data.get();
    let allListProps = {};
    data.forEach(todo => {
        let listName = todo.list;
        if (!allListProps.hasOwnProperty(`${listName}`)) {
            allListProps[`${listName}`] = true;
        }
        return allListProps;
    });
    return allListProps;
}

function getActiveLists() { //returns a de-duplicated list of active list names
    let data = Data.getActive();
    let activeListProps = {};
    data.forEach(todo => {
        let listName = todo.list;
        if (!activeListProps.hasOwnProperty(`${listName}`)) {
            activeListProps[`${listName}`] = true;
        }
        return activeListProps;
    });
    return activeListProps;
}

function editSubmit(event, index) {
    let item = event.currentTarget;
    const data = Data.getActive();
    let itemToUpdate = data[index];
    itemToUpdate.edit('title', item[0].value);
    itemToUpdate.edit('description', item[1].value);
    itemToUpdate.edit('list', item[2].value);
    itemToUpdate.edit('priority', item[3].value);
    itemToUpdate.edit('due', item[4].value);
    Data.update(itemToUpdate);
}

function formSubmit(event) {
    const id = generateId();
    const todo = new ToDo(id, this[0].value, this[1].value, this[2].value, this[3].value, this[4].value, false);
    Data.add(todo);
};

function markDone(element) {
    console.log('checkbox checked!');
    const index = element.dataset.index;
    const data = Data.getActive();
    console.log(`${element}`);
    const itemToUpdate = data[index].edit('done', true);
    Data.update(itemToUpdate);
    updateList(Data.getActive());
    updateNav(Data.getActive());
};

function getMatches(listName) {
    let current = listName;
    const fullList = getLists();
    const keys = Object.keys(fullList);
    let matches = keys.filter(key => (key.toUpperCase() === current.toUpperCase()) || (key.toUpperCase().startsWith(current.toUpperCase())));
    return matches;
}

document.addEventListener("click", function(event) {
    let element = event.target;
    let closest = element.closest(".listItem");
    let action = element.dataset.action;
    if (action === undefined) {
        if (closest) {
            element = closest;
            action = element.dataset.action;
            console.log(`${element}, ${action}`);
        } else if (element.id === "formContainer") {
            showHide(element);
        }
    }
    if (action === 'edit') {
        editToDo(element);
    } else if (action === 'markDone') {
        markDone(closest);
    } else if (action === 'auto') {
        let matches = getMatches(element.value);
        updateAutocomplete(matches);
    } else {
        console.log('no action defined, yet');
    }
    
    console.log(`element data-action is ${action}`);
});

document.addEventListener("mousedown", function(event) {
    let element = event.target;
    let action = element.dataset.action;
    if (action === 'selectMatch') {
        fillSelection(element.textContent);
        hide(element.closest("#autoContainer"));
    }
});

document.addEventListener("input", function(event) {
    let element = event.target;
    let action = element.dataset.action;
    if (action === "auto") {
        let matches = getMatches(element.value);
        updateAutocomplete(matches);
    }
});

document.addEventListener("focusin", function(event) {
    console.log('focusin!');
    let element = event.target;
    let action = element.dataset.action;
    if (action === "auto") {
        let matches = getMatches(element.value);
        updateAutocomplete(matches);
        show(element.nextSibling);
    }
});

document.addEventListener("focusout", function(event) {
    console.log('focusout!');
    let element = event.target;
    let action = element.dataset.action;
    if (action === "auto") {
        console.log(`element is ${element}`);
        hide(element.nextSibling);
    }
});

// form submission will reload the page, calling these updates
updateList(Data.getActive());
updateNav(Data.getActive());

export { markDone, formSubmit, getActiveValues, getActiveLists, editSubmit, getLists };