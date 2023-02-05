import { NavLink } from 'react-router-dom';
import './NavItem.css';

type NavItemProps = {
  to: string;
  label: string;
  icon?: React.ReactNode;
  highlight?: boolean;
};

function NavItem({
  to,
  label,
  icon,
  highlight = false,
}: NavItemProps) {
  return (
    <NavLink
      className={({ isActive }: { isActive: boolean }) => {
        return `nav-item ${
          isActive ? 'active' : ''
        } ${
          highlight ? 'highlight' : ''
        }`;
      }}
      to={to}
    >
      <div className="nav-item__info">
        {icon}
        {label}
      </div>
    </NavLink>
  );
}

export default NavItem;
