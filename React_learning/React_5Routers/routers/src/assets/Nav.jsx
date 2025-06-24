import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/products">products</Link>
      <span> | </span>
      <Link to="/dashboard">dashboard</Link>
    </div>
  );
}
