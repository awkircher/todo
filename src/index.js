import { ToDo } from './ToDo.js';
import { updateList, updateNav, editToDo, showHideModal } from './view.js';
import { Data } from './database.js';
//import { getTestData } from './testData.js'

function generateId() {
    const data = Data.get();
    let id = data.length;
    return id++;
}

function getValues() {
    return Data.getActive();
}

function editSubmit(event, index) {
    //event.preventDefault();
    let item = event.currentTarget;
    console.log('you tried to submit edits');
    console.log(`event is ${event}`);
    console.log(`item is ${item}`);
    console.log(`this is ${this}`);
    console.log(`index is ${index}`);
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
            showHideModal(element);
        }
    }
    if (action === 'edit') {
        editToDo(element);
    } else if (action === 'markDone') {
        markDone(closest);
    } else {
        console.log('no action defined, yet');
    }
    
    console.log(`element data-action is ${action}`);
});

// form submission will reload the page, calling these updates
updateList(Data.getActive());
updateNav(Data.getActive());

export { markDone, formSubmit, getValues, editSubmit };