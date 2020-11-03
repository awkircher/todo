import { ToDo } from './ToDo.js';
import { updateList, updateNav } from './view.js';
import { Data } from './database.js';
//import { getTestData } from './testData.js'

function formSubmit(event) {
    const todo = new ToDo(this[0].value, this[1].value, this[2].value, this[3].value, this[4].value, false);
    Data.add(todo);
};

function markDone(event) {
    console.log('checkbox checked!');
    const index = event.currentTarget.dataset.index;
    const theData = Data.getActive();
    const itemToUpdate = theData[index].edit('done', true);
    Data.update(index, itemToUpdate);
    updateList(Data.getActive());
    updateNav(Data.getActive());
};

// form submission will reload the page, calling these updates
updateList(Data.getActive());
updateNav(Data.getActive());

export { markDone, formSubmit };