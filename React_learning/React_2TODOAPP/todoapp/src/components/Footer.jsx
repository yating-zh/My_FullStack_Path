import styles from "./footer.module.css";
export default function Footer({ todos }) {
  const countTotal = todos.length;
  const doneArray = todos.filter((todo) => todo.done === true);
  const doneTotal = doneArray.length;
  return (
    <div className={styles.footer}>
      <span>Total Task: {countTotal}</span>
      <span>Completed Task: {doneTotal}</span>
    </div>
  );
}
