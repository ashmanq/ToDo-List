import Vue from 'vue';


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos:[],
      newTodo:"",
      priority:""
    },
    methods: {
      addNewTodo: function() {
        const itemToAdd = {
          name: this.newTodo,
          isComplete: false,
          priority: this.priority
        };
        this.todos.push(itemToAdd);
        this.newTodo = "";
      },
      completeItem: function(index) {
        this.todos[index].isComplete = true;
      }
    }

  });
});
