//Initialisation du localStorage
/*localStorage.todos = JSON.stringify([
    {id:1, content: "Tâche 1", completed: true, isEdited: false},
    {id:2, content: "Tâche 2", completed: false, isEdited: false}
])*/

function todoApp () {
    return {
        todos: JSON.parse(localStorage.todos) || [],
    };
}