const Navigation = () => (
  <nav className="h-10">
    <ul className="h-full flex items-center justify-center">
      <li className="mx-2">
        <a href="https://github.com/wab">
          <img
            src="/github.svg"
            alt="github Logo"
            className="inline w-5 mr-1 align-text-bottom"
          />
          github
        </a>
      </li>
      <li className="mx-2">
        <a href="https://twitter.com/wabdesign">
          <img
            src="/twitter.svg"
            width="32"
            alt="twitter Logo"
            className="inline w-5 mr-1 align-text-bottom"
          />
          twitter
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
