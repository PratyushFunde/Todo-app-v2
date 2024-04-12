import { MdDelete } from "react-icons/md";
function TodoItem({ todoname, tododate, handleDelete }) {
  return (
    <>
      <div className="container">
        <div className="row my-row ">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(todoname)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
