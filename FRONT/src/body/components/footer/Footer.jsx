import React from 'react';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function FooterMoreInfo() {
  return (
    <footer className="border-t-2 border-black bg-gray-100 bg-opacity-50 w-full bottom-0 fixed">
      <div className="mx-auto w-full max-w-screen-xl p-4  lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-center font-gilroy text-gray-500 text-sm">
            <Link to={"/home"} className="text-gray-500 hover:text-corn text-sm underline">
              Alejandro Patiño
            </Link>
            {" || Todos los derechos reservados"}© 2024{" "}
          </p> 
          <div className="flex space-x-5 sm:justify-center ">
            <div className="flex space-x-5 justify-center">
              <Link to="https://www.instagram.com/humanconet.es/?hl=fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
                <AiFillInstagram className="w-5 " />
                <span className="sr-only">Instagram page</span>
              </Link>

              <Link to="https://twitter.com/Human_Conet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
                <BsTwitter className="w-5 " />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link to="https://www.youtube.com/channel/UCUSeWaaZ5-T3NIEIFBiccwA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
                <AiFillYoutube className="w-5 " />
                <span className="sr-only">YouTube page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMoreInfo;
