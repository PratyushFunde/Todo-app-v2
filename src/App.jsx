import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./My.css";
import { useState, useReducer } from "react";
import EmptyMsg from "./components/EmptyMsg";
import { TodoItemsContext } from "./store/todoItemsStore";

const todoItemsReducer = (curState, action) => {
  let newTodoItems = [];
  if (action.type == "ADD_TODO") {
    newTodoItems = [
      ...curState,
      { name: action.payload.itemName, dueDate: action.payload.itemDate },
    ];
  } else if (action.type == "DELETE_TODO") {
    newTodoItems = curState.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  // let initialTodoItems = [];
  //const [todoItems, settodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const handleAddTodo = (itemName, itemDate) => {
    const addItem = {
      type: "ADD_TODO",
      payload: { itemName, itemDate },
    };
    dispatchTodoItems(addItem);
    // settodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, duedate: itemDate },
    // ]);
  };

  const handleDelete = (todoName) => {
    const deleteItem = {
      type: "DELETE_TODO",
      payload: {
        itemName: todoName,
      },
    };
    dispatchTodoItems(deleteItem);
    // const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    // settodoItems(newTodoItems);

    // console.log(todoName);
    // console.log("Deleted");
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: handleAddTodo,
        deleteItem: handleDelete,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>

        <AddTodo />
        <TodoItems />
        <EmptyMsg />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
