import { create, markDone } from './classDef.js';
import { updateList, updateNav } from './itemTemplate.js';
import { Data } from './database.js';
//import { getTestData } from './testData.js'

updateList(Data.get()); //view onscreen
updateNav(Data.get());

const form = document.querySelector('#createNew');
form.addEventListener('submit', function(event){
    const todo = create(this);
    Data.add(todo);
});

const checkboxes = document.querySelectorAll('#listContainer div');
Array.from(checkboxes).forEach(element => {
    element.addEventListener("change", markDone);
});