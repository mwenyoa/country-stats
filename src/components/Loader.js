import { ClipLoader } from 'react-spinners';

const Loading = () => {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'navy',
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen mx-auto">
      <ClipLoader
        cssOverride={override}
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
        loading
      />
    </div>
  );
};

export default Loading;
