import { Link, useLocation } from "react-router"
import { useEffect, useState } from "react"

const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

const NavbarRoot = ({ children }: { children: React.ReactNode }) => {
  const isScrolled = useScrollPosition();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-32 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
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
        let isActive = false;

        if (name === 'home') {
          // Home is active for exact path OR detail/booking pages
          isActive = location.pathname === urlTo ||
                     location.pathname.startsWith('/detail') ||
                     location.pathname.startsWith('/booking');
        } else if (name === 'browse-by') {
          // Browse By is active for exact path OR category detail pages
          isActive = location.pathname === urlTo ||
                     location.pathname.startsWith('/category');
        } else if (name === 'stories') {
          // Stories is active for exact path OR story detail pages
          isActive = location.pathname === urlTo ||
                     location.pathname.startsWith('/stories/');
        } else {
          // For other nav items (agents), only active for exact match
          isActive = location.pathname === urlTo;
        }

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
