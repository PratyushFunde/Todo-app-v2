import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todoItemsStore";
import { useContext } from "react";

const TodoItems = () => {
  const { deleteItem } = useContext(TodoItemsContext);
  const { todoItems } = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  // console.log(todoFromContext);
  return (
    //items-container center ms-4
    <>
      <div className={`center ${styles.itemsContainer}`}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoname={item.name}
            tododate={item.duedate}
            handleDelete={deleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
