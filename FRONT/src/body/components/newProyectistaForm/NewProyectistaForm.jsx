import React, { useState } from "react";
import { postProject } from "../../../redux/actions.js";
import { useDispatch } from "react-redux";
import FileUploader from "../putVitrinaForm/FileUploader.jsx";
import Swal from "sweetalert2";
import axios from "axios";
function NewProyectistaForm() {
  const cloudName = 'dwcp7dk9h'; // Replace 'your_cloud_name' with your Cloudinary cloud name
  const cloudPreset = 'psap9znd'; // Replace 'your_cloud_name' with your Cloudinary cloud name
const dispatch = useDispatch()


  const [fields, setFields] = useState([]);
  const [fieldCounters, setFieldCounters] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [vitrinaImage, setVitrinaImage] = useState("");
  const [imagePreview, setImagePreview] = useState('https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png');
  
  const handleImageChange = (file) => {
    setVitrinaImage(file)
    // let url = URL.createObjectURL(file)
    setImagePreview(URL.createObjectURL(file))
    // console.log(url)
   
  }


  const [formData,setFormData ] = useState({
    "type": "Staff",
    "category":'Profiles',
    "Propinas_PP":[],
    "Propinas_OK":[],
    "Turno_Activo":[],
    "Turno_Pasados":[],

  });

  const ableToAddField = [
    // { order: 4, mainProperty: "FUNCIONES", subProperties: ["name", "role", "contact"] },
    // { order: 5, mainProperty: "media.img", subProperties: ["name", "URL", "description"] },
    // { order: 6, mainProperty: "media.video", subProperties: ["name", "URL", "description"] },
    // { order: 7, mainProperty: "descriptions", subProperties: ["name", "type", "description"] },
    // { order: 8, mainProperty: "projectsDates", subProperties: ["date", "landMark"] },
    // { order: 9, mainProperty: "Opciones", subProperties: ["description", "role_tittle", "dates.start", "dates.end"] },
  ];

  const staticField = [
    { order: 1, mainProperty: "Nombre", subProperties: [] },
    { order: 2, mainProperty: "Apellido", subProperties: [] },
    // { order: 3, mainProperty: "Propinas PP", subProperties: [] },
    // { order: 3, mainProperty: "Propinas OK", subProperties: [] },
    // { order: 3, mainProperty: "Turno Activo", subProperties: [] },
    // { order: 3, mainProperty: "Turno Pasados", subProperties: [] },
  ];
  
  const selectField = [
    { order: 3, mainProperty: "Cargo", options: ['Barista JN' , 'Barista SN' , 'Barista TR' , "Cocinero JN", 'Cocinero JN' , 'Cocinero TR' , 'ADMIN 01'  , 'ADMIN 02'] },

  ];


  const handleOnBlur = (input, context, subContext = null, id = null) => {
    let keys = context.split('.');
  
    if (subContext) {
      // Si hay un subContext, se crea un nuevo objeto con la propiedad principal y la propiedad secundaria actualizada
      if (keys.length === 2) {
        formData[keys[0]][keys[1]][id][subContext] = input;
      } else {
        formData[keys[0]][id][subContext] = input;
      }
    } else {
      // Si no hay subContext, se actualiza directamente la propiedad principal
      formData[context] = input;
    }
  
    console.log(formData);
  };
  
  


  
  


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior


    // dispatch(
      postProject(formData)
      // )

  };


  

  const getFieldSectionLabel = (mainProperty) => {
    switch (mainProperty) {

      case 'team':
        return 'Equipo:';
      case 'media.img':
        return 'Imagen:';
      case 'media.video':
        return 'Video:';
      case 'descriptions':
        return 'Descripciones:';
      case 'description':
        return 'Descripción:';
      case 'projectsDates':
        return 'Fechas del Proyecto:';
      case 'roles':
        return 'Rol:';
      case 'role':
        return 'Rol:';
      case 'projectName':
        return 'Nombre Del Proyecto:';
      case 'category':
        return 'Categoría:';
      case 'client':
        return 'Nombre del Cliente:';
      case 'entryData':
        return 'Datos de Publicación:';
      case 'authorName':
        return 'Autor de la Publicación:';
      case 'date':
        return 'Fecha:';
      case 'landMark':
        return 'Hito:';
      case 'contact':
        return 'Contacto:';
      case 'type':
        return 'Tipo:';
      case 'name':
        return 'Nombre:';
      case "dates.start":
        return 'Fecha Inicio:';
      case "dates.end":
        return 'Fecha Final:';
      case "role_tittle":
        return 'Cargo:';
      case "arch":
        return 'Arquitectura:';
      case "code":
        return 'Programación:';
      case "soci":
        return 'Impacto Social:';

      default:
        return mainProperty;
    }
  };

  const renderStaticFields = () => {
    return staticField
      .sort((a, b) => a.order - b.order)
      .map((fieldConfig, index) => (
        <div key={index} className={fieldConfig.mainProperty}>
          {fieldConfig.subProperties.length === 0 ?
            <div className="ml-3 ">
              <label className="block text-gray-700 text-sm font-bold mb-2">{getFieldSectionLabel(fieldConfig.mainProperty)}</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                placeholder={getFieldSectionLabel(fieldConfig.mainProperty)}
                onBlur={(e) => { handleOnBlur(e.target.value, fieldConfig.mainProperty) }}
              />
            </div>
            :
            <>
              {fieldConfig.subProperties.map((subProperty, index) => (
                <div key={index} className="ml-3">
                  <label className="block  text-gray-700 text-sm font-bold mb-2">{getFieldSectionLabel(subProperty)}</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    placeholder={getFieldSectionLabel(subProperty)}
                    onBlur={(e) => { handleOnBlur(e.target.value, fieldConfig.mainProperty) }}
                  />
                </div>
              ))}
            </>
          }
        </div>
      ));
  };
  const renderSelectFields = () => {
    return selectField
      .sort((a, b) => a.order - b.order)
      .map((fieldConfig, index) => (
        <div key={index} className={fieldConfig.mainProperty}>
          <label className="block ml-3 text-gray-700 text-sm font-bold mb-2">{getFieldSectionLabel(fieldConfig.mainProperty)}</label>
          <select 
            className="border ml-3 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            onChange={(e) => console.log(e.target.value)}
            onBlur={(e) => { handleOnBlur(e.target.value, fieldConfig.mainProperty) }}
          >
            {fieldConfig.options.map((option, index) => (
              <option key={index} value={option}>{getFieldSectionLabel(option)}</option>
            ))}
          </select>
        </div>
      ));
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <div>
          {renderStaticFields()}
          {renderSelectFields()}

          {ableToAddField.map((fieldConfig, index) => (
            <div 
            className=""
            key={index}>
              <button 
              className="mt-3 ml-3 w-96   bg-amber-100 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="button" onClick={() => addField(fieldConfig)}>
                AÑADIR CAMPO PARA:{getFieldSectionLabel(fieldConfig.mainProperty)}
              </button>
              {fields.filter(field => field.props.className === fieldConfig.mainProperty)}
            </div>
          ))}


{/* <div className="flex-row  h-16 ">
  <div className="flex">
    <div className="rounded-lg justify-center items-center w-40  border-2 border-emerald-500 m-6">
      <label>Seleccionar imagen:</label>
      <FileUploader handleFile={handleImageChange} />
    </div>

    <div className="rounded-lg flex flex-col justify-center items-center w-16 border-2 border-emerald-500 m-8">
      <img src={`${imagePreview}`} alt='' className="p-2" />
    </div>

    <div className="rounded-lg flex-col justify-center items-center w-40 border-2 border-emerald-500 m-6 flex">
      {isLoading ? 
        ('Cargando...') : 
        (
          <>
            <label>Cargar imagen:</label>
            <div onClick={uploadImage}>⬆️</div>
          </>
        )
      }
    </div>
  </div>
</div> */}





        </div>





        <button
          className="mt-3  border-3 border-solid  border-y-gray-950 ml-3 w-64 h-10 bg-red-200 rounded-md p-2 focus:outline-none focus:border-blue-500"
        type="submit">REGISTRO STAFF</button>

      </form>
  <br></br>
  <br></br>
  <br></br>
    </div>
  );
}

export default NewProyectistaForm;
