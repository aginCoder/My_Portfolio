import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
        </p>

        <br />

        <p className="text-xl">
          I enjoy building things from the ground up — turning ideas into real, functional products is something that excites me. If you have a project in mind, feel free to reach out! <br /> <br />
          I’m drawn to clean, simple designs that focus on user experience and meaningful content. My goal is to create something that not only looks good but actually connects with people. <br /> <br />
          Whether it’s crafting a new identity for a product, improving visibility through search or social platforms, or just making things work better — I’m here to help.
        </p>
      </div>
    </div>
  );
};

export default About;
