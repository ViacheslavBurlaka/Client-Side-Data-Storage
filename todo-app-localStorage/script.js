var ENTER_KEY = 13;

window.onload = function () {
  var todos = [],
    todoTaskList = document.querySelector('#todo-tasks-list');

  init();

  function init() {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    bindEvents();
    renderItems();
  }

  function bindEvents() {

    document.querySelector('#to-do-input').addEventListener('keypress', function (event) {
      var task = this.value;
      if (event.keyCode === ENTER_KEY && task !== '') {
        createTodo(task);
        syncLocalStorage();
        renderItems();
        this.value = '';
      }
    });

    $('#todo-tasks-list').on('click', 'li input', function (event) {
      var itemId = $(this).data('id');

      if ($(this).is(':checked')) {
        //update the done parameter as true
        updateItem(itemId, true);
      } else {
        //update the done parameter as false
        updateItem(itemId, false);
      }

      syncLocalStorage();
      renderItems();
    });

    $('#todo-tasks-list').on('click', 'li button', function (event) {
      var itemId = $(this).data('id');
      removeItem(itemId);
      syncLocalStorage();
      renderItems();
    });
  }

  function createTodo(task) {
    todos.push({id: todos.length, task: task, done: false});
  }

  function syncLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function renderItems() {
    $('#todo-tasks-list').html('');
    todoTaskList.innerHTML = '';

    for (var i = 0; i < todos.length; i++) {
      var item = createItemTemplate(todos[i]);
      $('#todo-tasks-list').append(item);
    }
  }

  function createItemTemplate(todo) {
    var item = '<li class="todo-item ' + (todo.done ? 'done' : '') + '">';
    item += '<label class="control--checkbox">';
    item += todo.task;
    item += '<input data-id="' + todo.id + '" type="checkbox" ' + (todo.done ? 'checked' : '') + ' />';
    item += '<div class="checked-icon"></div>';
    item += '</label>';
    item += '<button data-id="' + todo.id + '" class="remove-todo-btn"><i class="fa fa-trash"></i></button>';
    item += '</li>';
    return item;
  }

  function updateItem(id, isDone) {
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].done = isDone;
        break;
      }
    }
  }

  function removeItem(id) {
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i, 1); // remove item
        break;
      }
    }
  }


};
