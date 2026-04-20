import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainProfile } from "../../../redux/actions";

function AboutMe() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainProfile());
  }, []);
  
  const mainProfile = useSelector(state => state.mainProfile);
  const currentLenguaje = useSelector(state => state.currentLenguaje);

  // Función para traducir los textos según el idioma seleccionado
  const translateText = (textObj) => {
    return currentLenguaje === 'ES' ? textObj.es : textObj.en;
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
      {/* Div para la imagen y el nombre */}
      <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border-b-2 border-l-2 border-black">
        <img src={mainProfile?.media?.img?.[0]?.URL} alt="Profile" className="w-32 h-32 rounded-full m-" />
        <h2 className="text-2xl font-bold text-center">{mainProfile?.profileFullName}</h2>
      </div>
      
      {/* Div para la información del perfil */}
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg border-b-2 border-l-2 border-black flex">
        <div className="flex-1 pr-8">
          <div className="mb-4">
            <strong>{translateText({ en: "Profile Nickname:", es: "Apodo de Perfil:" })}</strong> {mainProfile?.profileNickName}
          </div>
          <div className="mb-4">
            <strong>{translateText({ en: "Profile Initials:", es: "Iniciales de Perfil:" })}</strong> {mainProfile?.profileInitials}
          </div>
          <div className="mb-4">
            <strong>{translateText({ en: "Bio:", es: "Biografía:" })}</strong>
            <ul>
              <li><strong>{translateText({ en: "Age:", es: "Edad:" })}</strong> {mainProfile?.bio?.[0]?.age}</li>
              <li><strong>{translateText({ en: "Birth:", es: "Nacimiento:" })}</strong> {mainProfile?.bio?.[0]?.birth}</li>
              <li><strong>{translateText({ en: "Height:", es: "Altura:" })}</strong> {'1.80 m'}</li>
              {/* <li><strong>{translateText({ en: "Height:", es: "Altura:" })}</strong> {mainProfile?.bio?.[0]?.height}</li> */}
              <li><strong>{translateText({ en: "Weight:", es: "Peso:" })}</strong> {mainProfile?.bio?.[0]?.weight}</li>
              <li><strong>{translateText({ en: "Gender:", es: "Género:" })}</strong> {mainProfile?.bio?.[0]?.gender}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Div para las redes sociales y el contacto */}
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg flex border-b-2 border-l-2 border-black ">
        <div>
          <div className="mb-4">
            <strong>{translateText({ en: "Social Media:", es: "Redes Sociales:" })}</strong>
            <ul>
              {mainProfile?.socialMedia?.map((social, index) => (
                <li key={index}>
                  <strong>{translateText({ en: social.name + ":", es: social.name + ":" })}</strong>
                  <a href={social.link}>{social.user}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <strong>{translateText({ en: "Contact:", es: "Contacto:" })}</strong>
            <ul>
              <li><strong>{translateText({ en: "Cellphone:", es: "Teléfono Celular:" })}</strong> {mainProfile?.contact?.[0]?.cellphone}</li>
              <li><strong>{translateText({ en: "Email:", es: "Correo Electrónico:" })}</strong> {mainProfile?.contact?.[0]?.email}</li>
              <li><strong>{translateText({ en: "Website:", es: "Sitio Web:" })}</strong> <a href={mainProfile?.contact?.[0]?.website}>{mainProfile?.contact?.[0]?.website}</a></li>
              <li><strong>{translateText({ en: "Location:", es: "Ubicación:" })}</strong> {mainProfile?.contact?.[0]?.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default AboutMe;
