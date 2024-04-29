import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../../redux/actions";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductFormEdit() {

  const {id} = useParams()
  const dispatch = useDispatch();

  const [selectedField, setSelectedField] = useState(""); // State to store the selected field
  const [selectedValue, setSelectedValue] = useState(""); // State to store the selected field
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option for the selected field
  const [textInputValue, setTextInputValue] = useState(""); // State to store the input value for static fields
  const [isLoading, setIsLoading] = useState(false);

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
  ];

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      setIsLoading(true); // Set loading state to true
      // Dispatch action to post the project data
      await dispatch(
        updateProject({
          "id":id, 
          "Field":selectedField,
          "Value": selectedValue  // Use selectedField and selectedOption or textInputValue to update the selected field

        }
          
        )
      );
      Swal.fire("Success", "Product data updated successfully", "success"); // Show success message
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update product data", "error"); // Show error message
    } finally {
      setIsLoading(false); // Set loading state back to false
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
                <input
                  type="text"
                  id={fieldConfig.mainProperty}
                  onChange={(e)=>{handleValueSelection(e.target.value)}}
                  onBlur={(e) => console.log(e.target.value)}
                />
              </div>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-3 border-3 border-solid border-y-gray-950 ml-3 w-64 h-10 bg-red-200 rounded-md p-2 focus:outline-none focus:border-blue-500"
          disabled={!selectedField || (!selectedOption && !textInputValue) || isLoading}
        >
          {isLoading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductFormEdit;
