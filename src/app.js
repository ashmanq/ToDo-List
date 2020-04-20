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
      },
      deleteComplete: function() {
        const result = this.todos.filter(item => item.isComplete == false);
        this.todos = result;
      },
      checkClass: function(index) {
        let classes = 'item';
        if (this.todos[index].isComplete == true) {
          classes += ' complete';
        } else {
          classes += ' incomplete';
        }

        if (this.todos[index].priority == "High") {
          classes += ' high';
        }

        return classes;
      }
    }

  });
});
