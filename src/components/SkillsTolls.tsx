import html from "../images/html-5.png";
import css from "../images/css-3.png";
import js from "../images/js.png";
import ts from "../images/typescript-2.svg";
import tailwind from "../images/tailwindvector.png";
import react from "../images/react.png";
import nextjs from "../images/next-js-logo.png";
import nodejs from "../images/nodejs.png";
import prisma from "../images/prisma2244.png";
import postgresql from "../images/postgres.png";
import express from "../images/express-logo.png";
import git from "../images/1color-lightbg@2x.png";
import query from "../images/e5281400-c0a4-11ea-911e-bf5e8aee9f15.png";
import storybook from "../images/storybook.webp";
import vite from "../images/vitejs.png";
import figma from "../images/figma.png";
import markdown from "../images/1_eZ7YPTqzcyFVoQxIOIQ9kQ.png";

function SkillsTolls() {
  return (
    <div className="bg-[#4054f7] w-full flex h-screen p-16">
      <div className="flex flex-col  p-10 ">
        <h1 className="heading3white">Development. Design.</h1>
        <h1 className="heading3white">Web Solutions.</h1>
        <h1 className="heading3white">I'm doing it all.</h1>
        <p className="pg text-white">
          As a junior web developer, I'm dedicated to creating seamless web
          experiences that merge functionality with aesthetics. With a keen eye
          for detail and a passion for coding, I specialize in crafting
          user-friendly interfaces and dynamic websites. I'm translate ideas
          into digital reality. My focus is on developing websites that not only
          look great but also provide a smooth and intuitive user experience.
        </p>
        <p className="pg text-white mt-4">
          Here you will be able to delve deeper into the tech skills I currently
          possess, and rest assured that I am constantly evolving and eager to
          learn new technologies.
        </p>
      </div>
      <div className="overflow-y-scroll flex flex-col gap-20 p-24">
        <img
          src={html}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl p-5 bg-white"
        />
        <img
          src={css}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl p-5 bg-white"
        />

        <img
          src={js}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={ts}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={tailwind}
          alt=""
          className="rounded-lg border-gray-950 border-2 drop-shadow-3xl "
        />
        <img
          src={react}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={nextjs}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={nodejs}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={prisma}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={postgresql}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={express}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={query}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={storybook}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={vite}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={git}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={figma}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
        <img
          src={markdown}
          alt=""
          className="rounded-lg  border-gray-950 border-2 drop-shadow-3xl"
        />
      </div>
    </div>
  );
}

export default SkillsTolls;
