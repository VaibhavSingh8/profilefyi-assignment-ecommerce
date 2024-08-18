const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto text-center ">
        <p className="text-gray-600 text-sm">
          Made with <span className="text-red-500">&hearts;</span> by Vaibhav
        </p>
        <p className="text-gray-600 text-sm mt-2">
          &copy; {new Date().getFullYear()} Vaibhav Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
