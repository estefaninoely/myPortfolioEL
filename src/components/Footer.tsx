function Footer() {
  return (
    <div className="bg-[#f4f4f4] p-32 pb-10">
      <div className="flex gap-80 justify-start mb-4">
        <div>
          <h1 className="name">Estefani Lopez</h1>
          <p className="pg1">Web Developer</p>
        </div>
        <div>
          <ul className="name">
            Home
            <li className="pg1">Service</li>
            <li className="pg1">About me</li>
            <li className="pg1">Portfolio</li>
          </ul>
        </div>
        <div>
          <ul className="name">
            Resources
            <li className="pg1">Code Tools</li>
            <li className="pg1">No-code Tools</li>
            <li className="pg1">Repositories</li>
            <li className="pg1">Contact me</li>
          </ul>
        </div>
      </div>
      <div className=" bg-black h-[1px]"></div>
      <p className="mt-8 pg1">© 2023 Estefani Lopez. All right reserved.</p>
    </div>
  );
}

export default Footer;
