import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function FooterMoreInfo() {
  return (
    <footer className="border-t-2 border-black bg-gray-100 bg-opacity-50 w-full bottom-0 fixed">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-center font-gilroy text-gray-500 text-sm">
            <Link to={"/home"} className="text-gray-500 hover:text-corn text-sm underline">
              Alejandro Patiño
            </Link>
            {" || Todos los derechos reservados"}© 2024{" "}
          </p> 
          <div className="flex space-x-5 sm:justify-center ">
            <div className="flex space-x-5 justify-center">
              <Link to="https://www.instagram.com/alejo.c137" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
                <AiFillInstagram className="w-8 h-8" />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link to="https://github.com/AlejoC137" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
                <FaGithub className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link to="https://www.linkedin.com/in/alejoc137" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
                <IoLogoLinkedin className="w-8 h-8" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMoreInfo;
