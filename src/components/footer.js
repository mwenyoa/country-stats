import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => (
  <footer className=" tex-gray-300 shadow bg-gradient-to-r from-sky-600 to-sky-800 w-full">
    <div className="w-full max-w-screen-xl mx-auto px-4  py-5">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          to="https://anthonymwenyo.netlify.app/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <span className="self-center xs:text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap text-white">
            AM Technologies
          </span>
        </Link>
        <ul className="flex justify-between flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-100">
          <li>
            <Link
              to="https://github.com/mwenyoa/"
              className="hover:underline mx-5"
            >
              <BsGithub className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/anthony-mwenyo/"
              className="hover:underline hover:scale-125 mx-5"
            >
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
      <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
      <span className=" text-md flex justify-center sm:text-center text-gray-200">
        © 2023
        <Link
          to="https://anthonymwenyo.netlify.app/"
          className="hover:underline"
        >
          AM TECH™
        </Link>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
