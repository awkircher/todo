import { ToDo } from './ToDo.js';
import { updateList, updateNav } from './view.js';
import { Data } from './database.js';
//import { getTestData } from './testData.js'

function generateId() {
    const data = Data.get();
    let id = data.length;
    return id++;
}

function formSubmit(event) {
    const id = generateId();
    const todo = new ToDo(id, this[0].value, this[1].value, this[2].value, this[3].value, this[4].value, false);
    Data.add(todo);
};

function markDone(event) {
    console.log('checkbox checked!');
    const index = event.currentTarget.dataset.index;
    const theData = Data.getActive();
    const itemToUpdate = theData[index].edit('done', true);
    Data.update(itemToUpdate);
    updateList(Data.getActive());
    updateNav(Data.getActive());
};

// form submission will reload the page, calling these updates
updateList(Data.getActive());
updateNav(Data.getActive());

export { markDone, formSubmit };