# todo
## A to do web app
This web app allows you to add, edit, and mark done items on your list. It relies on local storage.

## Future improvements
The initial work for this app was completed with a focus on practicing SOLID design principles. A secondary focus was on DOM manipulation and CSS. There are many areas for big and small improvements:
1. UI Polish
* Transition animations 
* 'Delightful' completion animations
2. Dates
* Readable date formatting
* Not allowing due dates that are in the past
* Fallback for browsers without type=date support
3. Features
* Countdown until 'due' with 'past due' styling
* Reduce content on main list view and introduce a 'details' view
* Responsive design
4. Code cleanup
* Refactor events and view.js file to keep all event listener declarations in index.js
* Treat view.js the same as database.js by making a View object, instead of exporting so many individual functions
* Find a way to loop through or helper-function DOM creation, particularly the create and edit modal forms
