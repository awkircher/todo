import { ToDo } from './ToDo.js';
import { updateList, updateNav } from './view.js';
import { Data } from './database.js';
//import { getTestData } from './testData.js'

// form submission will reload the page, calling these updates
updateList(Data.getActive());
updateNav(Data.getActive());

const form = document.querySelector('#createNew');
form.addEventListener('submit', function(event){
    //const todo = create(this);
    const todo = new ToDo(this[0].value, this[1].value, this[2].value, this[3].value, this[4].value, false);
    Data.add(todo);
});

const checkboxes = document.querySelectorAll('#listContainer div');
Array.from(checkboxes).forEach(element => {
    element.addEventListener("change", function(event){
        console.log('checkbox checked!');
        const index = event.currentTarget.dataset.index;
        const theData = Data.getActive();
        const itemToUpdate = theData[index].edit('done', true);
        Data.update(index, itemToUpdate);
        updateList(Data.getActive()); //change event doesn't reload page, so calling updateList directly
    });
});