import { Link } from "react-router-dom";
function Aside({ id, title }) {
  return (
    <aside>
      <p id={id}>
        <Link to={`${id}`}> - {title}</Link>
      </p>
    </aside>
  );
}

export default Aside;
