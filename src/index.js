import { create } from './classDef.js';
import { show } from './itemTemplate.js';

const task = [
    'Mark this task as done!',
    null,
    null,
    null,
    false,
];

let allToDos = create(task);
console.log(allToDos);
show(allToDos);