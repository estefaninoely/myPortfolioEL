import { useEffect, useState } from "react";
import me from "../images/mechat.png";
import profi from "../images/profile-1341-svgrepo-com.svg";
import Nav from "./Nav";

function CoffeTable() {
  const [bgActive, setbgActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setbgActive(!bgActive);
    }, 900);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <Nav />
      <div className="p-20 bg-[#ececec] pt-32">
        <div className="flex">
          <div className="mr-4">
            <img src={me} alt="" className="rounded-full w-24 h-24" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-14 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <div
            className={`rounded-full w-24 h-24 ml-4 ${
              bgActive ? "bg-[#d4d7f8]" : "bg-transparent"
            } flex justify-center transition-all duration-500`}
          >
            <img src={profi} alt="" className="rounded-full w-16" />
          </div>
        </div>

        <h1 className="about mt-8">Let's Catch Up Over Coffee ☕️</h1>

        <div>
          <form action="" id="contact-form">
            <input
              id="contact_number"
              className="h-12 w-80"
              type="hidden"
              name="contact_number"
            />

            <label htmlFor="name" className="labels">
              Name
            </label>

            <input
              type="text"
              id="name"
              className="w-full mt-4 mb-4 p-2 rounded-sm border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="email" className="labels">
              Email Address
            </label>

            <input
              type="text"
              id="email"
              className="w-full mt-4 mb-4 p-2 rounded-sm border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="services" className="labels">
              Service Required
            </label>

            <select
              name="services"
              id="services"
              className="w-full mt-4 mb-4 p-2 rounded-sm border-2 border-gray-300 focus:outline-none focus:border-blue-500 pg"
            >
              <option value="">Select a Service</option>

              <option value="Web Development">Web Development</option>

              <option value="Web Design">Web Design</option>

              <option value="Mobile App Development">
                Mobile App Development
              </option>

              <option value="UI/UX Design">UI/UX Design</option>

              <option value="Other">Other</option>
            </select>

            <label htmlFor="message" className="labels">
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="let me a message..."
              cols={30}
              rows={10}
              className="w-full mt-4 mb-4 p-2 rounded-sm border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>

            <input
              type="submit"
              name="submit"
              id="submit"
              value="Submit"
              placeholder="Submit"
              className="bg-[#4054f7] w-[33%] text-[#e7e9ff] border-2 border-solid border-black labelss p-2 rounded-sm"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CoffeTable;
