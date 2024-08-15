const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 px-4 py-2 rounded-full flex items-center justify-center w-full hover:bg-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
