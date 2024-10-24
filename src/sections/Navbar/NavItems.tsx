import { navLinks } from "@/constants";

function NavItems() {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name, icon }) => {
        return (
          <li className="nav-li" key={id}>
            <a
              href={href}
              className="nav-li_a flex items-center gap-1"
              onClick={() => {}}
            >
              {icon}
              <p>{name}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
