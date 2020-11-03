import { ToDo } from './classDef.js';
import { updateList, updateNav } from './itemTemplate.js';
import { Data } from './database.js';
//import { getTestData } from './testData.js'

updateList(Data.get()); //view onscreen
updateNav(Data.get());

const form = document.querySelector('#createNew');
form.addEventListener('submit', function(event){
    //const todo = create(this);
    const todo = new ToDo(this[0].value, this[1].value, this[2].value, this[3].value, this[4].value, false);
    Data.add(todo);
});

const checkboxes = document.querySelectorAll('#listContainer div');
Array.from(checkboxes).forEach(element => {
    element.addEventListener("change", function(event){
        let id = event.currentTarget.dataset.index;
        const property = 'done';
        const value = true;
        Data.update(id, property, value);
    });
});

const theData = Data.get();
//theData[0].edit('title', 'My updated title');
console.log(theData[0]);