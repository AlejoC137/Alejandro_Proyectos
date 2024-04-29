import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject , postProject} from "../../../redux/actions";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";
import FileUploader from "../../components/putVitrinaForm/FileUploader.jsx";

function ProductFormEdit() {
  const cloudName = 'denjiview'; // Replace 'your_cloud_name' with your Cloudinary cloud name

  const cloudPreset = 'itjhsbrs'; // Replace 'your_cloud_name' with your Cloudinary cloud name

  const {id} = useParams()
  const dispatch = useDispatch();

  const [selectedField, setSelectedField] = useState(""); // State to store the selected field
  const [selectedValue, setSelectedValue] = useState(""); // State to store the selected field
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option for the selected field
  const [textInputValue, setTextInputValue] = useState(""); // State to store the input value for static fields
  const [isLoading, setIsLoading] = useState(false);


  const [vitrinaImage, setVitrinaImage] = useState("");
  const [imagePreview, setImagePreview] = useState('https://res.cloudinary.com/denjiview/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png');
  
  const handleImageChange = (file) => {
    setVitrinaImage(file)
    // let url = URL.createObjectURL(file)
    setImagePreview(URL.createObjectURL(file))
    // console.log(url)
   
  }
  // Object containing fields and their options
  const selectField = {
    TipoES: ['Café', 'Bebidas', 'Sanduches', "Desayuno", 'Postres', 'Panes', 'NA'],
    TipoEN: ['Coffee', 'Drinks', 'Sandwitch', "Breackfast", "Deserts", 'Breads', 'NA'],
    SubTipoES: ['Frío', 'Caliente', 'Dulce', "Salado", 'NA'],
    SubTipoEN: ['Cold', 'Hot', 'Sweet', "Salty", 'NA'],
    DietaES: ['Carnico', 'Vegetarino', 'Vegano', 'NA'],
    DietaEN: ['Meat', 'Vegeterian', 'Vegan', 'NA'],
    CuidadoES: ['Nueces', 'Picante', 'NA'],
    CuidadoEN: ['Walnuts', 'Spice', 'NA'],
    Estado: ['Activo', 'Inactivo']
  };

  const staticField = [
    { order: 1, mainProperty: "NombreES", subProperties: [] },
    { order: 1, mainProperty: "NombreEN", subProperties: [] },
    { order: 2, mainProperty: "Precio", subProperties: [] },
    { order: 3, mainProperty: "DescripcionES", subProperties: [] },
    { order: 3, mainProperty: "DescripcionEN", subProperties: [] },
    { order: 3, mainProperty: "foto", subProperties: [] },
  ];

  // Function to handle form submission
  const handleSubmit =  (e) => {
    e.preventDefault(); // Prevent default form submission behavior

  
      // Dispatch action to post the project data
      updateProject({
          "id": id,
          "Field": selectedField,
          "Value": selectedValue // Use selectedField and selectedOption or textInputValue to update the selected field
        })

  };
  const uploadImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      let imageURL;
      if (
        vitrinaImage && (
          vitrinaImage.type === 'image/png' ||
          vitrinaImage.type === 'image/jpg' ||
          vitrinaImage.type === 'image/jpeg'
        )
      ) {
        const image = new FormData();
        image.append('file', vitrinaImage);
        image.append('cloud_name', `${cloudName}`);
        image.append('upload_preset', `${cloudPreset}`);
  
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, image);
  
        // Si la carga de la imagen fue exitosa, obtenemos la URL y la almacenamos en formData
        const imageURL = response.data.url;
        handleOnBlur(imageURL, 'foto'); // Aquí llamamos a handleOnBlur para agregar la URL al campo de media.img
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error al cargar la imagen', error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };
  // Function to handle field selection
  const handleFieldSelection = (Field) => {
    setSelectedField(Field);
  };
  const handleValueSelection = (Value) => {
    setSelectedValue(Value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>


        {/* Field Selector */}
        <div>
          <label htmlFor="fieldSelector">Select Field:</label>
          <select
            id="fieldSelector"
            // value={selectedField}
            onChange={(e)=>{handleFieldSelection(e.target.value)}}
            onBlur={(e) => console.log(e.target.value)}
            // onBlur={handleFieldSelection} // Use onBlur instead of onChange
          >
            <option value="">Select Field</option>

            {Object.keys(selectField).map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}


            {staticField.map((fieldConfig, index) => (
              <option key={index} value={fieldConfig.mainProperty}>
                {fieldConfig.mainProperty}
              </option>
            ))}
          </select>
        </div>




        {/* Option Selector */}
        {selectedField && selectField[selectedField] && (
          <div>
            <label htmlFor="optionSelector">Select Option:</label>
            <select
              id="optionSelector"
              onChange={(e)=>{handleValueSelection(e.target.value)}}
              onBlur={(e) => console.log(e.target.value)}
            >
              <option value="">Select Option</option>
              {selectField[selectedField].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Text Input for Static Fields */}
        {staticField.map((fieldConfig, index) => (
          <div key={index}>
            {selectedField === fieldConfig.mainProperty && (
              <div>
                <label htmlFor={fieldConfig.mainProperty}>{fieldConfig.mainProperty}:</label>
             {selectField !=='foto' &&  <input
                  type="text"
                  id={fieldConfig.mainProperty}
                  onChange={(e)=>{handleValueSelection(e.target.value)}}
                  onBlur={(e) => console.log(e.target.value)}
                />}
              </div>
            )}
          </div>
        ))}


{selectField === 'foto' && 

<div className="flex-row  h-16 ">
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
</div>

}








        {/* Submit Button */}
        <button
          type="submit"
          className="mt-3 border-3 border-solid border-y-gray-950 ml-3 w-64 h-10 bg-red-200 rounded-md p-2 focus:outline-none focus:border-blue-500"
          disabled={!selectedField || isLoading}
        >
          {isLoading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductFormEdit;
