import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMainProfile } from "../../../redux/actions";

export default function AboutMe() {
  const dispatch = useDispatch();
  const Visitor = useSelector(state => state.visitorData);
  const mainProfile = useSelector(state => state.mainProfile);
  const [specialHi, setSpecialHi] = useState("");
  const [normalHi, setNormlaHi] = useState("Hola!,")
  useEffect(() => {
    dispatch(getMainProfile());
  }, []);

  useEffect(() => {
    switch (Visitor) {
      case 'Meli':
        setSpecialHi(' I ♡ U ');
        break;
      default:
        setSpecialHi('');
        break;
    }


    console.log(Visitor);
  }, [Visitor]);

  return (
    <nav className="border-b-2 border-black bg-opacity-50 bg-gray-100 tra">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link>
          <li className="font-Montserrat font-bold text-8xl flex flex-col">
            <button className="md:dark:hover:text-pureRed font-Montserrat font-bold text-4xl flex flex-col">
               {specialHi===""?normalHi:specialHi}{" "}{Visitor}{" "}{mainProfile.profileNickName?mainProfile.profileNickName:''}
            </button>
          </li>
        </Link>

        <Link to={`/home`}>
          <button className="flex items-center">
            <div className="flex items-center">
              <img src={''} className="h-6 mr-3" />
            </div>
          </button>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            
            <Link to={`/home`}>
              <li>
                <button className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                  PROYECTOS
                </button>
              </li>
            </Link>

            <Link>
              <li>
                <button className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                  SOBRE MI
                </button>
              </li>
            </Link>

            <Link
              to={`/newproject`}
            >
              <li>
                <button className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                  INGRESAR PROYECTOS
                </button>
              </li>
            </Link>

            <Link>
              <li>
                <button className="block py-2 pl-3 pr-4 text-black rounded font-Montserrat hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-keppel600 md:p-0 dark:text-black md:dark:hover:text-pureRed dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                  
                </button>
              </li>
            </Link>


          </ul>
        </div>
      </div>
    </nav>
  );
}
