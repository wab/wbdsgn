const Header = () => (
  <header className="flex flex-col items-center justify-center text-center min-h-64 text-lg">
    <img
      src="/avataaars.png"
      alt="avatar"
      width="120"
      className="mx-auto p-4 m-4"
    />
    <p>jérôme boileux • frontend engineer</p>
    <blockquote className="text-gray-600 font-thin font-sans tracking-wider">
      Responding to complexity with simplicity
    </blockquote>
  </header>
);

export default Header;
