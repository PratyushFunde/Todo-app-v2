import { useContext, useRef } from "react";
import { FaPlusSquare } from "react-icons/fa";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todoItemsStore";

function AddTodo({ addTodo }) {
  const {addNewItem}=useContext(TodoItemsContext)
  // const [todoname, setTodoname] = useState("");
  // const [duedate, setDuedate] = useState("");

  const nameElement = useRef();
  const dateElement = useRef();
  // const handleNameChange = (event) => {
  //   setTodoname(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDuedate(event.target.value);
  //   console.log(`Numbder of Updates are : ${noOfUpdates.current}`);
  // };
  const handleAdd = (event) => {
    event.preventDefault();
    // console.log(event);

    if (nameElement.current.value == " " || dateElement.current.value == "") {
      alert("Fill All Fields");
    } else {
      addNewItem(nameElement.current.value, dateElement.current.value);
      nameElement.current.value = "";
      dateElement.current.value = "";
    }
  };
  return (
    <>
      <div className="container ">
        <form className="row my-row" onSubmit={handleAdd}>
          <div className="col-6">
            <input ref={nameElement} type="text" placeholder="Enter Todo" />
          </div>
          <div className="col-4">
            <input ref={dateElement} type="date" name="" id="" />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className={`btn btn-success ${styles.mybutton}`}
            >
              <FaPlusSquare />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
