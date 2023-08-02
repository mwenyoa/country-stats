import { useEffect } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className="z-50  bg-gradient-to-r from-gray-50 to-gray-100 shadow-2xl  font-extrabold">
      <nav className="xs:px-8 sm:px-10 md:px-20 w-full h-24 font-bold text-sky-900">
        <NavLink
          to={location.pathname !== '/' ? '/' : '#'}
        >
          {location.pathname === '/' ? (
            <FaHome />
          ) : (
            <TiArrowBackOutline title="Back To Home" />
          )}
        </NavLink>
        <NavLink to="/">
          <h2 className=" xs:text-2xl md:text-4xl font-extrabold"> Country Quest</h2>
        </NavLink>
        <div className="flex space-between">
          <BsMic />
          <AiOutlineSetting />
        </div>
      </nav>
    </header>
  );
};

export default Header;
