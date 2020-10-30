const listContainer = document.querySelector("#listContainer");
const sideNav = document.querySelector("#sideNav");

function updateList(data) {
    data.forEach((todo, index) => {
        let parent = document.createElement('div');
        parent.setAttribute("data-index", `index${index}`);
        listContainer.appendChild(parent);

        let domTitle = document.createElement('h1');
        let domDescription = document.createElement('h2');
        let domPriority = document.createElement('p');
        let domDue = document.createElement('p');
        let domDone = document.createElement('input');

        parent.appendChild(domTitle);
        parent.appendChild(domDescription);
        parent.appendChild(domPriority);
        parent.appendChild(domDue);
        parent.appendChild(domDone);
        
        domTitle.textContent = todo.title;
        domDescription.textContent = todo.description;
        domPriority.textContent = todo.priority;
        domDue.textContent = todo.due;
        domDone.setAttribute("type", "checkbox");
    });
}

function updateNav(data) {
    let allListProps = {};
    data.forEach(todo => {
        let listName = todo.list;
        if (!allListProps.hasOwnProperty(`${listName}`)) {
            allListProps[`${listName}`] = true;
        }
        return allListProps;
    });
    for (const property in allListProps) {
        const item = document.createElement('div');
        sideNav.appendChild(item);
        item.setAttribute("id", `${property}`);
        item.textContent = `${property}`;
    }
}

export { updateList, updateNav };