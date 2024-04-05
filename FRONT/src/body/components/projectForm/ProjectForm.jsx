import React, { useState } from "react";
import { postProject } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function ProjectForm() {
const dispatch = useDispatch()
  const [teamCount, setTeamCount] = useState();
  const [media_imgCount, setMedia_imgCount] = useState();
  const [media_videoCount, setMedia_videoCount] = useState();
  const [descriptionCount, setDescriptionCount] = useState();
  const [datesCount, setDatesCount] = useState();

  const [fields, setFields] = useState([]);
  const [fieldCounters, setFieldCounters] = useState({});
  
  const [formData,setFormData ] = useState({
    "projectName":'',
    "type": "projects",
    "category":'',
    "client":'',
    "team":[],
    "media":{"img":[],"video":[]},
    "descriptions":[],
    "projectsDates":[], 
    "entryData":[],
  });

  const ableToAddField = [
    { order: 4, mainProperty: "team", subProperties: ["name", "role", "contact"] },
    { order: 5, mainProperty: "media.img", subProperties: ["name", "URL", "description"] },
    { order: 6, mainProperty: "media.video", subProperties: ["name", "URL", "description"] },
    { order: 7, mainProperty: "descriptions", subProperties: ["name", "type", "description"] },
    { order: 8, mainProperty: "projectsDates", subProperties: ["date", "landMark"] },
    { order: 9, mainProperty: "roles", subProperties: ["description", "role_tittle", "dates.start", "dates.end"] },
  ];

  const staticField = [
    { order: 1, mainProperty: "projectName", subProperties: [] },
    { order: 3, mainProperty: "client", subProperties: [] },
    { order: 10, mainProperty: "entryData", subProperties: ["authorName"] },
  ];
  const selectField = [
    { order: 2, mainProperty: "category", options: ['arch', 'code' , 'soci'] },
  ];


  const handleOnBlur = (input, context, subContext , id ) => {
    // let newFormData;
    let keys = context.split('.')

    if (subContext) {
      // Si hay un subContext, se crea un nuevo objeto con la propiedad principal y la propiedad secundaria actualizada
      if  (keys.length == 2 ){

          formData[keys[0]][keys[1]][id][subContext] = input
    } else {
      formData[keys[0]][id][subContext] = input

    }
      
    } else {
      // Si no hay subContext, se actualiza directamente la propiedad principal
       
      // console.log('No Context');
        formData[context] = input
  
      };

      console.log(formData);
    }
  
  const createObjectInCategory = (objConfig) => {
    const { mainProperty, subProperties } = objConfig;
  
    // Dividir la cadena mainProperty para obtener las claves
    const keys = mainProperty.split('.');
  
    // Referencia al objeto formData
    let target = formData;
  
    // Iterar sobre las claves para acceder a la ubicación correcta en el objeto formData
    for (const key of keys) {
      target = target[key];
    }
  
    // Crear el nuevo objeto con las propiedades especificadas en subProperties
    const newObject = {};
    for (const prop of subProperties) {
      newObject[prop] = '';
    }
  
    // Agregar el nuevo objeto al lugar correcto dentro de formData
    target.push(newObject);
  
    // Puedes devolver formData si es necesario
    // return formData;
    // console.log(formData); ;
  };
  const addField = (fieldConfig) => {

    createObjectInCategory(fieldConfig);
    const subInputs = fieldConfig.subProperties.map((subProperty, index) => (
      <input
        key={index}
        type="text"
        placeholder={getFieldSectionLabel(subProperty)}
        onChange={(e) => console.log(e.target.value)}
        onBlur={(e)=>{ handleOnBlur(e.target.value , fieldConfig.mainProperty , subProperty , currentCount )}}
        />
    ));

    if (subInputs.length === 0) {
      subInputs.push(
        <input
          key={0}
          type="text"
          placeholder={getFieldSectionLabel(fieldConfig.mainProperty)}
          onChange={(e) => console.log(e.target.value)}
          onBlur={(e) => console.log(e.target.value)}
        />
      );
    }

    const fieldKey = fieldConfig.mainProperty;
    const currentCount = fieldCounters[fieldKey] || 0;

    setFields([
      ...fields,
      <div key={fields.length} className={fieldKey}>

<p>
          {getFieldSectionLabel(fieldConfig.mainProperty)}
          {' '}
          {currentCount + 1}
        </p>
        {subInputs.map((input, index) => (
          <div key={index}>
            <label>{fieldConfig.placeholder}</label>
            <label>{`${getFieldSectionLabel(fieldConfig.subProperties[index])}: `}</label>
            {input}
          </div>
        ))}

      </div>
    ]);

    setFieldCounters({ ...fieldCounters, [fieldKey]: currentCount + 1 });


    console.log(formData); // Placeholder for sending data to backend

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
        return 'Equipo';
      case 'media.img':
        return 'Imagen';
      case 'media.video':
        return 'Video';
      case 'descriptions':
        return 'Descripciones';
      case 'description':
        return 'Descripción';
      case 'projectsDates':
        return 'Fechas del Proyecto';
      case 'roles':
        return 'Rol';
      case 'role':
        return 'Rol';
      case 'projectName':
        return 'Nombre Del Proyecto';
      case 'category':
        return 'Categoría';
      case 'client':
        return 'Cliente';
      case 'entryData':
        return 'Datos de Publicación';
      case 'authorName':
        return 'Autor de la Publicación';
      case 'date':
        return 'Fecha';
      case 'landMark':
        return 'Hito';
      case 'contact':
        return 'Contacto';
      case 'type':
        return 'Tipo';
      case 'name':
        return 'Nombre';
      case "dates.start":
        return 'Fecha Inicio';
      case "dates.end":
        return 'Fecha Final';
      case "role_tittle":
        return 'Cargo';
      case "arch":
        return 'Arquitectura';
      case "code":
        return 'Programación';
      case "soci":
        return 'Impacto Social';

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
            <div>
              <label>{getFieldSectionLabel(fieldConfig.mainProperty)}</label>
              <input
                type="text"
                placeholder={getFieldSectionLabel(fieldConfig.mainProperty)}
                // onChange={(e) => console.log(e.target.value)}
                onBlur={(e)=>{ handleOnBlur(e.target.value , fieldConfig.mainProperty )}}
              />
            </div>
            :
            <>
              {fieldConfig.subProperties.map((subProperty, index) => (
                <div key={index}>
                  <label>{getFieldSectionLabel(subProperty)}</label>
                  
                <div key={index+0.1}>
                  <input
                    type="text"
                    placeholder={getFieldSectionLabel(subProperty)}
                    onBlur={(e)=>{ handleOnBlur(e.target.value , fieldConfig.mainProperty )}}
                    // onBlur={}
                  />
                  
                </div>
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
          <label>{getFieldSectionLabel(fieldConfig.mainProperty)}</label>
          <select onChange={(e) => console.log(e.target.value)}
                          onBlur={(e)=>{ handleOnBlur(e.target.value , fieldConfig.mainProperty )}}

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
            <div key={index}>
              <button type="button" onClick={() => addField(fieldConfig)}>
                Añadir campo para {getFieldSectionLabel(fieldConfig.mainProperty)}
              </button>
              {fields.filter(field => field.props.className === fieldConfig.mainProperty)}
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProjectForm;
