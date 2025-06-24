import { Link, useLocation } from "react-router-dom";
export default function Profile() {
  const location = useLocation();
  const { user, age } = location.state || {};
  return (
    <div>
      <hr />
      <div>this is Profile page</div>
      {user ? `user:${user}, age:${age}` : ""}
    </div>
  );
}
