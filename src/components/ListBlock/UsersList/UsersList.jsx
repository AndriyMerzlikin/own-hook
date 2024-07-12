import { USERS_BTN } from "../../../constans/btnConstans";
import { USERS } from "../../../constans/urlConstans";
import useFetch from "../../../hooks/useFetch";
import Button from "../../Button/Button";
import Loader from "../../Loader/Loader";

const UsersList = () => {
  const { data: users, isLoading, error, fetchData } = useFetch(USERS);

  return (
    <>
      <Button title={USERS_BTN} handleClick={fetchData} />
      {isLoading && <Loader />}
      {error && <h3>Error: {error}</h3>}
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default UsersList;
