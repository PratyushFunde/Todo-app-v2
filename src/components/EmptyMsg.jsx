import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const EmptyMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems=contextObj.todoItems;
  return todoItems.length == 0 && <h3>Enjoy Day </h3>;
};

export default EmptyMsg;
