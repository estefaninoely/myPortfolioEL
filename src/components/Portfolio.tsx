import project1 from "../images/img11.png";
import project2 from "../images/d'accord.png";
import project3 from "../images/mediamodifier_image (3).png";
import project4 from "../images/ASJ.png";

function Portfolio() {
  return (
    <div>
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
            <div className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]">
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
            </div>
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
      {/* end of project 1*/}
      {/* start of project 2*/}
      <div className="grid grid-cols-2 ml-20">
        <div className="p-24 pr-0 ">
          <h1 className="heading3">d’Accord (Consensus-base polling app)</h1>
          <p className="description">
            Consensus-Based Poll Web App lies the belief in fostering
            collaboration and inclusivity. Committed to providing an intuitive
            and engaging platform that encourages users to participate actively
            in polls, express their opinions, and contribute to collective
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
              ensures the interface is not only visually appealing but also
              highly functional and user-friendly. Build with reusable and
              modular UI components using JSX.
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
            <div className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]">
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
            </div>
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
        <div className="p-20">
          <img src={project2} alt="" className="max-w-[22vw] drop-shadow-2xl" />
        </div>
      </div>
      {/* start of project 3*/}
      <div className="grid grid-cols-2 items-center">
        <div>
          <img src={project3} alt="" />
        </div>
        <div className="p-20 pl-0  ">
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
          <div className="flex gap-4">
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              Web Application Development
            </div>
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              UX | UI Design
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]">
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
            </div>
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
        <div className="p-20 pr-0 pl-0">
          <h1 className="heading3">ASJ (Sheet Metal Company)</h1>
          <p className="description">
            In this project, I have combined the best of design and technology
            to bring ASJ to life. The website features a modern and visually
            appealing interface that reflects the professionalism and
            sophistication of the sheet metal industry. With a sleek and
            intuitive user interface, visitors can effortlessly explore the
            company's services, projects, and contact information. Created with
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
            <div className="p-3 bg-gray-100 border-l-4 border-[#4054f7] border-solid rounded-sm  mt-4 mb-4">
              Content Creation
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="gap-2 hover:bg-[#d4d7f8] descriptionbtn flex p-4 border border-[#4054f7] border-solid w-64 justify-center items-center text-[#4054f7]">
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
            </div>
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
        <div>
          <img src={project4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
