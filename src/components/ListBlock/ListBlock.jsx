import ToDosList from "./ToDosList/ToDosList";
import UsersList from "./UsersList/UsersList";
import "./ListBlock.css";

const ListBlock = () => {
  return (
    <div className="list-block">
      <div className="list-container">
        <ToDosList />
      </div>
      <div className="list-container">
        <UsersList />
      </div>
    </div>
  );
};

export default ListBlock;
