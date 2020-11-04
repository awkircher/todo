import { ToDo } from './ToDo.js';
import { updateList, updateNav } from './view.js';
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

function markDone(event) {
    console.log('checkbox checked!');
    const index = event.currentTarget.dataset.index;
    const data = Data.getActive();
    const itemToUpdate = data[index].edit('done', true);
    Data.update(itemToUpdate);
    updateList(Data.getActive());
    updateNav(Data.getActive());
};

// form submission will reload the page, calling these updates
updateList(Data.getActive());
updateNav(Data.getActive());

export { markDone, formSubmit, getValues, editSubmit };