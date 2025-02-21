export interface NavLink {
  href: string;
  label: string;
}

interface DesktopNavigationProps {
  links: NavLink[];
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  links,
}) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-blue-500 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
