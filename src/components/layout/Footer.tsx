export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-inter">
      {/* logo */}
      <img
        src="https://i.pinimg.com/1200x/e6/44/a9/e644a9e8bc7664e783b74d5b63503662.jpg"
        alt="logo"
        className="w-13 h-13 mx-auto rounded-full my-4"
      />
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SUPER HERO. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
