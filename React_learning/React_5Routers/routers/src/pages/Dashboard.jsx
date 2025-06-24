import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      {/*<Link to="/">Home</Link>*/}
      <hr />
      this is dashboard page
      <ul>
        <li>
          <Link to="settings">settings</Link>
        </li>
        <li>
          <Link to="profile">profile</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
