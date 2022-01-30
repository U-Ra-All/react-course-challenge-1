import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./CreateUser.module.css";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const createUserHandler = (event) => {
    event.preventDefault();
    console.log(inputName, inputAge);
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler}>
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" onChange={nameChangeHandler} />
        <label htmlFor="age">Возраст</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Добавить Пользователя</Button>
      </form>
    </Card>
  );
};

export default CreateUser;
