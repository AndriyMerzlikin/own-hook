import { TODOS_BTN } from "../../../constans/btnConstans";
import { TODOS } from "../../../constans/urlConstans";
import useFetch from "../../../hooks/useFetch";
import Button from "../../Button/Button";
import Loader from "../../Loader/Loader";

const ToDosList = () => {
  const { data: todos, isLoading, error, fetchData } = useFetch(TODOS);

  return (
    <>
      <Button title={TODOS_BTN} handleClick={fetchData} />
      {isLoading && <Loader />}
      {error && <h3>Error: {error}</h3>}
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h2>{todo.title}</h2>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default ToDosList;
