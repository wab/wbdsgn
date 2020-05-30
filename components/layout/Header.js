import Avatar from './Avatar';

const Header = () => (
  <header className="flex flex-col items-center justify-center text-center min-h-64 text-lg">
    <Avatar className="mx-auto m-4" />
    <p>jérôme boileux • frontend engineer</p>
    <blockquote className="text-gray-600 font-thin font-sans tracking-wider">
      Responding to complexity with simplicity
    </blockquote>
  </header>
);

export default Header;
