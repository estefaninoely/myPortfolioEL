import Media from "./Media";

function Services() {
  return (
    <div className="">
      <div className="pl-16 pr-16">
        <div>
          <div className="p-16">
            <div className="grid grid-cols-8 gap-10 justify-items-start">
              <h1 className="servtitle grid col-span-5">Web Development</h1>
              <div className="grid col-start-3 col-span-5">
                <p className="pg  mb-6 ">
                  I specialize in building responsive and user-friendly websites
                  using various technologies, including HTML, CSS, JavaScript
                  and TypeScript. I enjoy creating websites that provide a
                  seamless user experience. I have a strong desire to keep
                  learning and growing as a developer. I'm always seeking
                  opportunities to expand my knowledge and stay up-to-date with
                  the latest industry trends.
                </p>
                <p className="pg mb-6 ">
                  Front-end and Back-end:On the front-end, I enjoy working with
                  modern frameworks like React and Next.js to create dynamic and
                  interactive user interfaces. On the back-end, I have
                  experience with Node.js and Express, enabling me to build
                  robust and efficient server-side applications.
                </p>
                <p className="pg  mb-6  ">
                  I thrive on solving complex challenges and finding creative
                  solutions. I approach each project with a problem-solving
                  mindset and love turning ideas into functional and visually
                  appealing websites.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="p-16 pt-0">
              <div className="grid grid-cols-8 justify-items-end gap-10">
                <h1 className="servtitle grid col-start-3 col-span-5">
                  Web Design
                </h1>
                <div className="grid col-start-2 col-span-4">
                  <p className="pg  mb-6  ">
                    In my passion for web design is the desire to create
                    impactful experiences for users. I believe that a
                    well-designed website can leave a lasting impression and
                    play an important role in achieving website goals, whether
                    it be increasing conversions, promoting a brand, or
                    delivering valuable content.
                  </p>
                  <p className="pg mb-6  ">
                    I have experience with responsive design and media queries,
                    which allows me to create websites that look great on all
                    devices providing users with an optimal experience across
                    different devices. I also have experience with various
                    design tools, including Figma and Canva.
                  </p>
                  <p className="pg  mb-6  ">
                    My experience in web development gives me an advantage when
                    collaborating with other developers. I understand the
                    technical aspects of implementing design elements, allowing
                    for smooth collaboration and efficient execution of ideas.
                  </p>
                  <p className="pg">
                    I am eager to contribute my skills and creativity to the
                    digital world and would love to be a part of innovative
                    projects that shape the future of Web Development and
                    Design.
                    <strong className="text-[#4054f7] ml-2 pgsemibold ">
                      Let's work together to bring your vision to life!
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Media />
      </div>
    </div>
  );
}

export default Services;
