import { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    if (inputValue.length < 3) return;

    const todo = {
      id: todoList.length + 1,
      title: inputValue,
      isCompleted: false,
    };

    const updatedTodos = [todo, ...todoList];
    setTodoList(updatedTodos);

    setInputValue("");
  }

  function deleteItem(todoId) {
    const updatedTodos = todoList.filter((todoItem) => todoItem.id !== todoId);
    setTodoList(updatedTodos);
  }

  function completeItem(todoId) {
    const updatedTodos = todoList.map((todoItem) => {
      if (todoId === todoItem.id) {
        const updatedTodo = {
          ...todoItem,
          isCompleted: !todoItem.isCompleted,
        };

        return updatedTodo;
      }
      return todoItem;
    });
    setTodoList(updatedTodos);
  }

  return (
    <div>
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id} style={{ color: todo.isCompleted ? "green" : "red" }}>
              {todo.title}
              <button onClick={() => deleteItem(todo.id)}>Delete</button>
              <button onClick={() => completeItem(todo.id)}>Complete</button>
            </li>
          );
        })}
      </ul>
      {todoList.length === 0 ? <p>There are no todos</p> : null}
    </div>
  );
}

export default Todo;
