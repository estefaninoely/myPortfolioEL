import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import memojie from "../images/memojie.png";

function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className="bgcolor h-[77rem] w-screen">
          <div className="flex flex-col justify-center items-center pt-40">
            {" "}
            <img src={memojie} alt="#" className="w-28 mb-4" />
            <h1 className="bigtitle w-[46rem] pt-0 text-center pb-0 text-white">
              Work With A Web Developer That Listens To Your Problems
            </h1>
            <p className="headdescription text-white text-center w-[40rem] p-8">
              I'm a Germany-Based Coder & Designer Web Developer Who Build Solid
              Web Experiences and Applications With Modern Technologies
            </p>
            <div className="curvibtn flex justify-evenly items-center">
              <a href="#" className="smallbold">
                Contact me
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white h-[50rem] w-screen absolute top-[45rem]">
          <Services />

          <Portfolio />
        </div>
      </main>
    </>
  );
}

export default Home;
