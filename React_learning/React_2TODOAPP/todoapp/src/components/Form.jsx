import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //const [input, setInput] = useState("");
  const [input, setInput] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput({ name: "", done: false });
  }
  return (
    <form action="">
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setInput({ name: e.target.value, done: false });
          }}
          value={input.name}
          placeholder="Enter a todo task..."
        />
        <button
          className={styles.button}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          submit
        </button>
      </div>
    </form>
  );
}
