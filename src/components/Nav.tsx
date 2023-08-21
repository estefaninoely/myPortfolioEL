import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const blurStartHeight = 700;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-transparent z-50 ${
        scrollPosition > blurStartHeight
          ? "backdrop-blur-[20px] text-[#222]"
          : "text-[#222]"
      }`}
    >
      <div className="flex justify-between items-center p-4 pl-28 pr-28">
        <Link to={"/"}>
          <div className="name ">Estefani Lopez</div>
          <div className="navbarname ">Web Developer</div>
        </Link>
        <div className="flex gap-12 navbar ">
          <div>
            {" "}
            <Link to="/services">Services</Link>
          </div>
          <div>
            {" "}
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div>
            {" "}
            <Link to="/about">About me</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
