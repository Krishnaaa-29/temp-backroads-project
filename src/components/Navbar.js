import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {" "}
                  {link.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            const { id, href, fa } = social; // just another way to do the same thing, i.e either use dot to access members or destructure them directly
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={fa}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
