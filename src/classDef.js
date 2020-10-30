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
    let toDoItem = new toDo(form[0], form[1], form[2], form[3], form[4], form[5]);
    return toDoItem;
}

export { create };