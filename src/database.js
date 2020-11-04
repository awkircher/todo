import { ToDo } from "./ToDo";

const Data = (function() {
    let allToDos = [];
    const add = function(item) {
        allToDos.unshift(item);
        localStorage.setItem("allToDos", JSON.stringify(allToDos));
        return allToDos;
    };
    const get = function() {
        let retrievedList = localStorage.getItem("allToDos");
        allToDos = JSON.parse(retrievedList) || [];
        allToDos.forEach((element, index) => {
            let todo = new ToDo;
            allToDos[index] = Object.assign(todo, element);
        });
        return allToDos;
    }
    const getActive = function() {
        let allToDos = get();
        let activeToDos = allToDos.filter(todo => todo.done !== true);
        return activeToDos;
    }
    const getFromList = function(listName) {
        //placeholder for when I have filtering by list
    }
    const update = function(itemToUpdate) {
        let allToDos = get();
        let index = allToDos.findIndex(todo => todo.id === itemToUpdate.id);
        let match = allToDos.filter(todo => todo.id === itemToUpdate.id);
        let updatedToDo = Object.assign(match[0], itemToUpdate);
        //replace the old allToDos item with updatedToDo
        allToDos[index] = updatedToDo;
        localStorage.setItem("allToDos", JSON.stringify(allToDos));
        console.log(`these are updated ${allToDos}`);
        return allToDos;
    }
    return {add, get, update, getActive};
})();

export { Data };