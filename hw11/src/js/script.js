window.onload = function () {
  function doId() {
    return Math.random().toString(36).slice(2);
  }
  function createItem(el) {
    const item = document.createElement('li');
    const remove = document.createElement('div');
    const text = document.createElement('span');
    remove.classList.add('task__list-remove');
    remove.addEventListener('click', function () {
      removeTask(this);
    });
    text.classList.add('task__list-text');
    text.addEventListener('click', function () {
      doneTask(this);
    });
    const tasks = {
      current: [{
        taskId: doId(),
        taskContent: 'Task 1',
        taskState: 'current',
      }, {
        taskId: doId(),
        taskContent: 'Task 2',
        taskState: 'current',
      }],
      done: [{
        taskId: doId(),
        taskContent: 'Task 3',
        taskState: 'done',
      }],
      get allTasks() {
        return this.current.length + this.done.length;
      },
      get doneTasks() {
        return this.done.length;
      },
    };
    const tasksList = document.querySelector('.task__list');
    const allTasks = document.querySelector('.all__tasks');
    const doneTasks = document.querySelector('.done__tasks');
    const addNewTaskField = document.querySelector('.task__new');

    function INIT() {
      for (const item of tasks.current) {
        createItem(item);
      }
      for (const item of tasks.done) {
        createItem(item);
      }
      allTasks.innerHTML = tasks.allTasks;
      doneTasks.innerHTML = tasks.doneTasks;
    }
    switch (el.taskState) {
      case 'done':
        item.classList.add('task__list-item', 'task__list-item--done');
        break;
      default:
        item.classList.add('task__list-item');
    }
    item.id = el.taskId;
    text.innerHTML = el.taskContent;
    item.appendChild(text);
    item.appendChild(remove);
    tasksList.appendChild(item);
  }

  function doneTask(el) {
    const elem = el.parentNode;
    const elemId = elem.id;
    const elemState = elem.classList.contains('task__list-item--done');
    const [itemsRemove, itemsAdd] = elemState ? [tasks.done, tasks.current] : [tasks.current, tasks.done];
    elem.classList.toggle('task__list-item--done');
    for (const [index, item] of itemsRemove.entries()) {
      if (item.taskId !== elemId) continue;
      itemsAdd.push(item);
      itemsRemove.splice(index, 1);
    }
    doneTasks.innerHTML = tasks.doneTasks;
  }

  function removeTask(el) {
    const removeEl = el.parentNode;
    const removeElId = removeEl.id;
    const removeElState = removeEl.classList.contains('task__list-item--done');

    removeEl.remove();
    const items = removeElState ? tasks.done : tasks.current;
    for (const [index, item] of items.entries()) {
      if (item.taskId !== removeElId) continue;
      items.splice(index, 1);
    }
    allTasks.innerHTML = tasks.allTasks;
    doneTasks.innerHTML = tasks.doneTasks;
  }

  function addTasks(str) {
    const elem = {
      taskId: doId(),
      taskContent: str,
      taskState: 'current',
    };
    tasks.current.push(elem);
    createItem(elem);
    allTasks.innerHTML = tasks.allTasks;
  }

  INIT();

  addNewTaskField.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      addTasks(this.value);
      this.value = '';
    }
  });
};
