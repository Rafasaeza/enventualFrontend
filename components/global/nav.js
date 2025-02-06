
import SignOut from "../sign-out";
import './Nav.css'; // Asegúrate de importar el archivo CSS

export default function Nav() {
  return (
    <nav className="navbar bg-gray-300">
      <ul className="navbar-list">
        <li><a href="/direccionForm">Explore</a></li>
        <li><a href="/createEvent">New Event</a></li>
        <li><a href="/profile">Profile</a></li>
        
        <li><SignOut></SignOut></li>
      </ul>
    </nav>
  );
}