import React from "react";
import Clinic_Management from "../assets/portfolio/api.jpg";
import busBooking from "../assets/portfolio/BusBooking.jpg";
import university from "../assets/portfolio/university.jpg";
import newWeb from "../assets/portfolio/newWeb.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Clinic_Management,
      link: '#',
      repo: 'https://github.com/aginCoder/Clinic_Management'
    },
    {
      id: 2,
      src: webpostman,
      link: 'https://web-postman.vercel.app/',
      repo: 'https://github.com/aginCoder/Web-Postman'
    },
    {
      id: 3,
      src: busBooking,
      link: '#',
      repo: 'https://github.com/aginCoder/BusTicketBooking'
    },
    {
      id: 4,
      src: newWeb,
      link: '#',
      repo: 'https://github.com/aginCoder/News_Web'
    },
    {
      id: 5,
      src: university,
      link: 'https://an-university.vercel.app/',
      repo: 'https://github.com/aginCoder/AnUniversity'
    },
    {
      id: 6,
      src: waveportal,
      link: 'https://waveatrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/Wave-Portal'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
