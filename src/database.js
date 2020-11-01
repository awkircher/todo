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
        return allToDos;
    }
    const update = function(id, property, value) {
        let allToDos = get();
        let itemToUpdate = allToDos[id];
        itemToUpdate[`${property}`] = value;
        localStorage.setItem("allToDos", JSON.stringify(allToDos));
        console.log(allToDos);
        return allToDos;
    }
    return {add, get, update}; //Data.add, Data.get
})();

export { Data };