// CSS files Styling:
//import "../css/style.css";
//export default function InlineStyling() {
//  return (
//    <div>
//      <h1 className="header">Inline Component</h1>
//    </div>
//  );
//}

//CSS modules Styling:
import styles from "./CSSStyling.Module.css";
export default function InlineStyling() {
  return (
    <div>
      <h1 className={styles.header}>Inline Component - using CSS Module</h1>
    </div>
  );
}
