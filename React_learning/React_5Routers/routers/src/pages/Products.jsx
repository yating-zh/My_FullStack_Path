import { Outlet, useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <h4>products list </h4>
      <Outlet />
    </div>
  );
}
