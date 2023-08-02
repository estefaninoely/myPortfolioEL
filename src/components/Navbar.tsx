import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
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
          ? "backdrop-blur-[10px] text-[#222]"
          : "text-white"
      }`}
    >
      <div className="flex justify-between items-center p-4 pl-28 pr-28">
        <div>
          <div className="name ">Estefani Lopez</div>
          <div className="navbarname ">Web Developer</div>
        </div>
        <div className="flex gap-12 navbar ">
          <div>
            {" "}
            <Link to="/">Services</Link>
          </div>
          <div>
            {" "}
            <Link to="/">Portfolio</Link>
          </div>
          <div>
            {" "}
            <Link to="/">About me</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
