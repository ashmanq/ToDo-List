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
        this.priority = "";
      },
      completeItem: function(index) {
        this.todos[index].isComplete = true;
      },
      deleteComplete: function() {
        const result = this.todos.filter(item => item.isComplete == false);
        this.todos = result;
      },
      checkClass: function(index) {
        let classes = '';
        if (this.todos[index].isComplete == true) {
          classes += ' complete';
        }

        if (this.todos[index].priority == "High") {
          classes += ' high';
        }

        return classes;
      }
    }

  });
});
