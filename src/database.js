import { ToDo } from "./ToDo";

const Data = (function() {
    let allToDos = [];
    let activeToDos = [];
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
        activeToDos = allToDos.filter(todo => todo.done !== true);
        return activeToDos;
    }
    const getFromList = function(listName) {
        //placeholder for when I have filtering by list
    }
    const update = function(index, itemToUpdate) {
        let allToDos = getActive();
        activeToDos[index] = Object.assign(activeToDos[index], itemToUpdate);
        localStorage.setItem("allToDos", JSON.stringify(allToDos));
        console.log(allToDos);
        return allToDos;
    }
    return {add, get, update, getActive};
})();

export { Data };