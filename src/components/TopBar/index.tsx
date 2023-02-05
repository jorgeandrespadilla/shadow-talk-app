import navLinks from "@/routes/navLinks";
import NavItem from "@/components/NavItem";
import UserInfo from "@/components/UserInfo";
import Brand from "@/components/Brand";
import "./TopBar.css";

function TopBar() {
  return (
    <header className="top-bar__container">
      <div className="top-bar__brand">
        <Brand />
      </div>
      <div className="top-bar__actions">
        <nav className="top-bar__nav">
          <ul className="top-bar__nav-list">
            {
              navLinks.map((link, index) => (
                <li key={index} className="top-bar__nav-item">
                  <NavItem
                    to={link.to}
                    label={link.label}
                    icon={link.icon}
                    highlight={link.highlight}
                  />
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="top-bar__divider" />
        <UserInfo />
      </div>
    </header>
  )
}

export default TopBar;