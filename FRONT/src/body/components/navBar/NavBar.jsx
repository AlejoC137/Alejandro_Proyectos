import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMainProfile, setLenguaje } from "../../../redux/actions";

export default function AboutMe() {
  const dispatch = useDispatch();
  const Visitor = useSelector((state) => state.visitorData);
  const mainProfile = useSelector((state) => state.mainProfile);
  const currentLenguaje = useSelector((state) => state.currentLenguaje);
  const [specialHi, setSpecialHi] = useState("");
  const [normalHi, setNormalHi] = useState(`Hola!`);
  // const [normalHi, setNormalHi] = useState(`Hola ${Visitor}!`);

  useEffect(() => {
    dispatch(getMainProfile());
  }, []);

  useEffect(() => {
    switch (Visitor) {
      case "Meli":
        setSpecialHi(` I ♡ U ${Visitor}`);
        break;
      default:
        setSpecialHi("");
        break;
    }
  }, [Visitor]);

  const lenguajeHandler = (len) => {
    dispatch(setLenguaje(len));
  };

  const translateText = (textObj) => {
    return currentLenguaje === "ES" ? textObj.es : textObj.en;
  };

  return (
    <nav className="border-b-2 border-black bg-opacity-50 bg-gray-100 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <Link to='/'>
          <li className="font-bold text-8xl flex flex-col">
            <button className="hover:text-pureRed font-Montserrat font-bold text-6xl flex flex-col italic">
              <span style={{ fontFamily: "Nunito" }} className="mt-[-0.2em]">
                ap
                {/* {specialHi==="" ? normalHi : specialHi} */}
                {/* Att: {mainProfile.profileNickName ? mainProfile.profileNickName : ''} */}
              </span>
            </button>
          </li>
        </Link>

        <Link to={`/home`}>
          <button className="flex items-center">
            <div className="flex items-center">
              <img src={""} className="h-6 mr-3" />
            </div>
          </button>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <Link to={`/home`}>
              <li>
                <button className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                  {translateText({
                    en: "PROJECTS",
                    es: "PROYECTOS",
                  })}
                </button>
              </li>
            </Link>

            <Link to={`/about`}>
              <li>
                <button className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                  {translateText({
                    en: "ABOUT ME",
                    es: "SOBRE MI",
                  })}
                </button>
              </li>
            </Link>

            <li>
              {/* <button onClick={() => lenguajeHandler('ES')} className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"> */}
              ||
              {/* </button> */}
            </li>
            <li>
              <button onClick={() => lenguajeHandler("ES")} className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                Español
              </button>
            </li>

            <li>
              <button onClick={() => lenguajeHandler("EN")} className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                English
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
