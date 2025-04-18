import { Link, useLocation } from "react-router"

const NavbarRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center px-32 py-4 outline outline-solid outline-gray-100">
      {children}
    </div>
  );
};

const Title = () => {
    return (
        <p className="text-2xl"><span className="text-liburi-primary">Libur</span>i</p>
    )
}

interface IDataNav {
  name: string;
  displayName: string;
  urlTo: string;
}

const Nav = () => {
  const location = useLocation();

  const dataNav: IDataNav[] = [
    { name: 'home', displayName: 'Home', urlTo: '/' },
    { name: 'browse-by', displayName: 'Browse by', urlTo: '/browse-by' },
    { name: 'stories', displayName: 'Stories', urlTo: '/stories' },
    { name: 'agents', displayName: 'Agents', urlTo: '/agents' },
  ];

  return (
    <nav className="flex gap-4">
      {dataNav.map(({ name, displayName, urlTo }: IDataNav) => {
        const isActive = location.pathname === urlTo;

        return (
          <Link key={name} to={urlTo}>
            <span className={`text-[16px] font-normal ${isActive ? 'text-liburi-primary' : 'text-black'}`}>
              {displayName}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};


const Navbar = Object.assign(NavbarRoot, {
  Title,
  Nav
});

export default Navbar
