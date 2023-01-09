import { Link } from "react-router-dom";
import "./nav.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/http-cat">HTTP Cat</Link>
      <Link to="/random-dog">Random Dog</Link>
      <Link to="/customers">Customers</Link>
      <Link to="ClientList">Lista de clientes</Link>
    </nav>
  );
}
export default Navbar;
