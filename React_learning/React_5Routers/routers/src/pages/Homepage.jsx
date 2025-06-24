import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Homepage() {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      {/*<Link to="/dashboard">Dashboard</Link>*/}
      <hr />
      <h4>this is home page</h4>
      <div htmlFor="">username</div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <div htmlFor="">age</div>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <button
        onClick={() => {
          navigate("/dashboard/profile", { state: { user, age } });
        }}
      >
        Goto profile page
      </button>
    </div>
  );
}
