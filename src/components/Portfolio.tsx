import project1 from "../images/img11.png";
import project2 from "../images/d'accord.png";
import project3 from "../images/mediamodifier_image (3).png";
import project4 from "../images/ASJ.png";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Portfolio() {
  return (
    <div className="">
      <Nav />
      <div className="flex flex-col items-center p-10 pb-0">
        <h1 className="prtitle ">Highlight Projects</h1>
        <p className="semismall">Responsive. Interactive. Dynamic.</p>
      </div>
      {/* start of project 1*/}
      <div className="grid grid-cols-2">
        <div>
          <img src={project1} alt="" />
        </div>
        <div className="p-20 pl-0 ml-[-7rem] ">
          <h1 className="heading3">Cinescape (Cinema Booking App)</h1>
          <p className="description">
            Cinescape is a cinema booking app, meticulously developed using a
            stack of cutting-edge technologies such as{" "}
            <strong className="text-[#4054f7] descriptionbold">
              Vite, React, Git, React Router, React Query, TypeScript,
              Express.js, Prisma, PostgreSQL, and Tailwind CSS.
            </strong>
            This project boasts an array of impressive features, including a
            comprehensive movie and user database, seamlessly integrated with{" "}
            <strong className="text-[#4054f7] descriptionbold">
              TMDb API.
            </strong>{" "}
          </p>
          <p className="description mt-2">
            The user-friendly UI components enhance the overall experience,
            while the bookmarking feature enables users to keep track of their
            favorite movies. Additionally, the app offers a genre-based sorting
            system, allowing users to easily discover films of their interest.
            The highlight of Cinescape is its intuitive seat selection and
            booking system, making it a must-have addition to any cinephile's
            website.
          </p>
          <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm w-64 mt-4 mb-4">
            Web Application Development
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              to={"https://github.com/estefaninoely/Movie-booking-app-"}
              className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              Visit GitHub Code
            </Link>
            <Link
              to={"https://camp9-midterm-frontend.vercel.app/"}
              className="gap-2 descriptionbtn hover:bg-[#d4d7f8] flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              Visit Life Site
            </Link>
          </div>
        </div>
      </div>
      {/* end of project 1*/}
      {/* start of project 2*/}
      <div className="grid grid-cols-2 ml-20">
        <div className="p-20 pl-6 mr-[-10rem] ">
          <h1 className="heading3">d’Accord (Consensus-base polling app)</h1>
          <p className="description">
            Consensus-Based Web App lies the belief in fostering collaboration
            and inclusivity. Committed to providing an intuitive and engaging
            platform that encourages users to participate actively in polls,
            express their opinions, and contribute to collective
            decision-making.
            <p>
              Developed with{" "}
              <strong className="text-[#4054f7] descriptionbold">
                {" "}
                Next.js, React, and Typescript,{" "}
              </strong>{" "}
              providing a seamless user experience and top-notch performance.
              With the power of{" "}
              <strong className="text-[#4054f7] descriptionbold">
                {" "}
                React Query,
              </strong>{" "}
              data is fetched and managed efficiently, ensuring real-time
              updates and smooth interactions. The use of{" "}
              <strong className="text-[#4054f7] descriptionbold">
                PostgreSQL and Prisma{" "}
              </strong>{" "}
              guarantees a robust and secure database to handle user information
              and poll data.
              <strong className="text-[#4054f7] descriptionbold">
                {" "}
                Tailwind CSS and Storybook
              </strong>{" "}
              ensures the interface is highly functional and user-friendly.
              Build with reusable and modular UI components using JSX.
            </p>
          </p>
          <div className="flex gap-4">
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              Web Application Development
            </div>
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              UX | UI Design
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              to={"https://github.com/estefaninoely/d-accord-"}
              className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              Visit GitHub Code
            </Link>
            <div className="gap-2 descriptionbtn hover:bg-[#d4d7f8] flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              Visit Life Site
            </div>
          </div>
        </div>
        <div className="p-20 pl-40">
          <img src={project2} alt="" className="max-w-[20vw] drop-shadow-2xl" />
        </div>
      </div>
      {/* start of project 3*/}
      <div className="grid grid-cols-2 mr-20 items-center">
        <div className="pl-6">
          <img src={project3} alt="" />
        </div>
        <div className="pl-0 p-8">
          <h1 className="heading3">PICKELS (Online Shop)</h1>
          <p className="description">
            Pickels is a Online-Shop Website, developed and designed using
            differents technologies such as{" "}
            <strong className="text-[#4054f7] descriptionbold">
              Vite, React, Git, React Router, TypeScript, JavaScript Tailwind
              CSS and Figma.
            </strong>
            {""} Pickles Online Shop is a user-friendly e-commerce website where
            customers can browse through a range of mouthwatering pickled
            products. With its clean and intuitive interface, users can easily
            navigate through the shop, view product details, add items to their
            cart, and proceed to checkout. The application is designed to
            provide a seamless shopping experience.
          </p>
          <div className="flex gap-4">
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              Web Application Development
            </div>
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              UX | UI Design
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              to={"https://github.com/estefaninoely/OnlineShop"}
              className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              Visit GitHub Code
            </Link>
            <div className="gap-2 descriptionbtn hover:bg-[#d4d7f8] flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              Visit Life Site
            </div>
          </div>
        </div>
      </div>
      {/* start of project 4*/}
      <div className="grid grid-cols-2 ml-20 items-center">
        <div className="p-20 pr-0 pl-6">
          <h1 className="heading3">ASJ (Sheet Metal Company)</h1>
          <p className="description">
            In this project, I have combined the best of design in user
            experience. The website features a modern and visually appealing
            interface. With a sleek and intuitive user interface, visitors can
            effortlessly explore the company's services, projects, and contact
            information. Created with
            <strong className="text-[#4054f7] descriptionbold">
              {" "}
              Figma{" "}
            </strong>{" "}
          </p>
          <p className="description mt-4">
            my attention to detail in creating a cohesive and polished web
            presence. From the carefully chosen color scheme to the
            strategically placed call-to-action buttons, every element is
            designed to enhance user engagement and drive business growth.
          </p>

          <div className="flex gap-4">
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              UX | UI Design
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              to={
                "https://www.figma.com/file/F8rnfMdiIlKnSZhuhRhQe5/ASJGmbH?type=design&node-id=24%3A371&mode=design&t=DCj7klyJbD0H54Wa-1"
              }
              className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                />
              </svg>
              Visit Figma Design
            </Link>
          </div>
        </div>
        <div>
          <img src={project4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
