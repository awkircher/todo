import { create } from './classDef.js';
import { updateList, updateNav } from './itemTemplate.js';
import { Data } from './database.js';
import { getTestData } from './testData.js'

const testData = getTestData();

testData.forEach(element => {
    const task = create(element);
    Data.add(task);
});

updateList(Data.get()); //view onscreen
updateNav(Data.get());