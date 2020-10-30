const Data = (function() {
    const allToDos = [];
    const add = function(item) {
        allToDos.push(item);
        console.log(item);
        return allToDos;
    };
    const get = function() {
        return allToDos;
    }
    return {add, get}; //Data.add, Data.get
})();

export { Data };