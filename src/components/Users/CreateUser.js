import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./CreateUser.module.css";

const CreateUser = (props) => {
  const createUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler}>
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" />
        <label htmlFor="age">Возраст</label>
        <input id="age" type="number" />
        <Button type="submit">Добавить Пользователя</Button>
      </form>
    </Card>
  );
};

export default CreateUser;
