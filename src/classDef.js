import { Data } from "./database";

class toDo {
    constructor(title, description, list, priority, due, done) {
        this.title = title;
        this.description = description;
        this.list = list;
        this.priority = priority;
        this.due = due;
        this.done = done;
    }
    edit(field, value) {
        switch (field) {
            case 'title': 
                this.title = value;
                break;
            case 'description':
                this.description = value;
                break;
            case 'list':
                this.list = value;
                break;
            case 'priority':
                this.priority = value;
                break;
            case 'due':
                this.due = value;
                break;
            case 'done':
                this.done = value;
                break;
        }
        return this;
    }
}

function create(form) {
    let toDoItem = new toDo(form[0].value, form[1].value, form[2].value, form[3].value, form[4].value);
    return toDoItem;
}

function markDone(event) {
    let id = event.currentTarget.dataset.index;
    const last = (id.length) - 1;
    id = id.charAt(last);
    const property = 'due';
    const value = true;
    Data.update(id, property, value);
}

export { create, markDone };