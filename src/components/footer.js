import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className=" tex-gray-300 shadow dark:bg-gradient-to-r from-sky-600 to-sky-800 w-full">
    <div className="w-full max-w-screen-xl mx-auto px-4  py-5">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="https://anthonymwenyo.netlify.app/" className="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="h-8 mr-3" alt="AM TECH" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AM Technologies
          </span>
        </Link>
        <ul className="flex justify-between flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-100">
          <li>
            <Link to="https://github.com/mwenyoa/" className="hover:underline mx-5">
              <BsGithub className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link to="https://https://www.linkedin.com/in/anthony-mwenyo/" className="hover:underline hover:scale-125 mx-5">
              <BsLinkedin className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/anthony_mwenyo"
              className="mx-5 hover:underline hover:scale-125"
            >
              <BsTwitter className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-200">
        © 2023
        {' '}
        <Link to="https://anthonymwenyo.netlify.app/" className="hover:underline">
          AM TECH™
        </Link>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
