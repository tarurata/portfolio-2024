import './globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
      <html lang="en">
      <body>
      <header className="z-20 p-4 bg-gray-800 text-white text-center flex justify-end sticky top-0 opacity-80 absolute">
          <nav>
              <a href="/" className="px-4">Home</a>
              <a href="/about" className="px-4">About</a>
              <a href="#projects" className="px-4">Projects</a>
              <a href="/blog" className="px-4">Blog</a>
              <a href="#contact" className="px-4">Contact</a>
          </nav>
      </header>
      {children}
      </body>
      </html>
  );
};

export default RootLayout;
