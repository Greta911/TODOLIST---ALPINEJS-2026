//Initialisation du localStorage
/*localStorage.todos = JSON.stringify([
    {id:1, content: "Tâche 1", completed: true, isEdited: false},
    {id:2, content: "Tâche 2", completed: false, isEdited: false}
])*/

function todoApp () {
    return {
        todos: JSON.parse(localStorage.todos) || [],
        newItemContent: "",

        notCompletedCount () {
            return this.todos.filter(item => !item.completed).length + " item(s) left";
        },
    //Observe toute modification de la data todos
    watcher () {
    this.$watch("todos", (newValue, oldValue) => {
        localStorage.todos= JSON.stringify(this.todos);
    });
    },
    //Ajout d'un item
        addItem () {
            this.todos.push({
                id: Date.now(),
                content: this.newItemContent,
                completed: false,
                isEdited: false,
            });
            this.newItemContent= "";
        },
    };
}