const Spinner = ({ className }) => {
  return (
    <div
      className={`mx-auto my-16 w-16 h-16 aspect-square border-4 border-indigo-500 border-t-transparent rounded-full animate-spin ${className}`}
    ></div>
  );
};

export default Spinner;
