import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileUploader from "./FileUploader.jsx";
import axios from "axios";
import { patchVitrina ,postProject } from "../../../redux/actions.js";

function PutVitrinaForm() {
  const [fileName, setFileName] = useState("");
  const [vitrinaImage, setVitrinaImage] = useState("");
  const [imagePreview, setImagePreview] = useState('https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png');
  const [isLoading, setIsLoading] = useState(false);
  const [imageDescription, setImageDescription] = useState('');
  
  const dispatch = useDispatch();
  const cloudName = 'dwcp7dk9h'; // Replace 'your_cloud_name' with your Cloudinary cloud name
  const cloudPreset = 'psap9znd'; // Replace 'your_cloud_name' with your Cloudinary cloud name

  const handleDecription = (e) => {
    setImageDescription(e.target.value)
  };


  const handleImageChange = (file) => {
    setVitrinaImage(file)
    // let url = URL.createObjectURL(file)
    setImagePreview(URL.createObjectURL(file))
    // console.log(url)
   
  }
  // const uploadImage = async (e) => {
  //   e.preventDefault()
  //   setIsLoading(true)


  //   try {
  //     let imageURL;
  //     if (
  //       vitrinaImage && (
  //         vitrinaImage.type === 'image/png' ||
  //         vitrinaImage.type === 'image/jpg' ||
  //         vitrinaImage.type === 'image/jpeg'
  //       )
      
  //     ){

  //       const image = new FormData()
  //       image.append('file',vitrinaImage)
  //       image.append('cloud_name',`${cloudName}`)
  //       image.append('upload_preset', `${cloudPreset}`)

  //       const response = await axios.post( `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, image)
       
     


          
  //       // dispatch( 
  //         patchVitrina() 
  //         postProject({
  //           projectName: "Proyecto Café Web",
  //           type: "info",
  //           category: "active",
  //           img:   {
  //                 name: "vitrina",
  //                 URL: `${response.data.url}`,
  //                 description: `${imageDescription}`
  //               }
            
  //         }) 
  //       // )


  //     }
  //     // alert(imageURL)
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false)
  //   }

  //   try {
  //     patchVitrina() 
  //   } catch (error) {
      
  //   }

  // }
  const delImage = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
  
    try {
    
         dispatch(

           patchVitrina()
         )
  
    //   
    } catch (error) {
      // console.log(error);
      // Swal.fire('Error al cargar la imagen', error.message, 'error');
    } finally {
      setIsLoading(false);
    }
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
  
        // If uploading image was successful, execute patchVitrina()
        await patchVitrina(); 
  
        // Once patchVitrina() is done, execute postProject()
        await postProject({
          projectName: "Proyecto Café Web",
          type: "info",
          category: "active",
          img: {
            name: "vitrina",
            URL: `${response.data.url}`,
            description: `${imageDescription}`
          }
        });
  
        // After both patchVitrina() and postProject() are done, perform any additional tasks
        // ...
  
        // You can also dispatch any actions or handle state updates here if needed
  
        // Show success message or perform any other UI actions
        // Swal.fire('Proyecto actualizado y cargado exitosamente');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error al cargar la imagen', error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div 
    className="  flex flex-col justify-center items-center	"
    >
      <br />
      <div
      className=" rounded-lg  flex-col justify-center items-center w-72 border-2 border-emerald-500 m-6 flex"
      >
      <label>Elimar imagen anterior:</label>
      <button onClick={delImage} >❌</button>


      </div>
      <div
      className=" rounded-lg flex-col justify-center items-center w-72 border-2 border-emerald-500 m-6 flex"
      >

      <label>Seleccionar image:</label>
      <FileUploader handleFile={handleImageChange} />

        </div>

        <div
      className=" rounded-lg flex flex-col justify-center items-center w-72 border-2 border-emerald-500 m-8 "
      >

          <img 
          src={`${imagePreview}`}
          alt='' 
          className="p-2"
          />

<label 
className=" rounded-lg flex flex-col justify-center items-center "
>DESCRIBE LA IMAGEN:</label>
<textarea type="text" className="   rounded-lg  mb-3 flex flex-col justify-center items-center border-sky-800 border-2 " onBlur={handleDecription} />

      </div>

      <div
      className="  rounded-lg flex-col justify-center items-center w-72 border-2 border-emerald-500 m-6 flex"
      >
      {
        isLoading ? 
        ('Cargando...')  :
        (
          <>
          
          <label

          >Cargar Imagen: </label>
          <button onClick={uploadImage} >⬆️</button>
          
          </>

        )
      }
        </div>



      



    </div>
  );
}

export default PutVitrinaForm;
