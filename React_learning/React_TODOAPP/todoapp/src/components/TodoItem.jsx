import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function deleteItem(item) {
    //console.log(`delete Clicked: ${item} `);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function completeItem(name) {
    console.log(`complete item:${name}`);
    const newTodos = todos.map((todo) => {
      return todo.name === name ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(newTodos);
    console.log(todos);
  }
  const doneItem = item.done ? styles.doneItem : "";
  return (
    <div className={styles.item}>
      <span
        className={`${styles.itemName} ${doneItem}`}
        onClick={() => {
          completeItem(item.name);
        }}
      >
        {item.name}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => {
          deleteItem(item);
        }}
      >
        X
      </button>
    </div>
  );
}
