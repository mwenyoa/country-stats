import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-500 page-not-found">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
          <div className="relative flex flex-col justify-center items-center mt-40 px-5">
            <h1 className="relative text-8xl tracking-tighter-less text-shadow font-sans font-bold">
              <span className="relative text-4xl top-0 -ml-24  -mt-24 text-gray-300 font-semibold">
                Oops!
              </span>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h4 className="text-gray-300 font-semibold -mr-10 -mt-2 my-10 text-xl">
            Page Not Found
          </h4>
          <p className="text-gray-100 mt-1 mb-6 text-xl">
            You wandered into uncharted territory. click on the button below to go home
          </p>
          <Link
            to="/"
            className="bg-sky-700 px-5 py-3 text-sm shadow-2xl font-bold text-gray-100 rounded-full hover:shadow-xl"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
