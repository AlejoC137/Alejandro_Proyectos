// import React, { useState } from "react";
// import { postProject, putProject } from "../../../redux/actions";
// import { useDispatch } from "react-redux";
// import  FileUploader  from "./FileUploader.jsx";
// import {Cloudinary} from "@cloudinary/url-gen";



// function PutVitrinaForm() {

//   const cld = new Cloudinary({cloud: {cloudName: 'denjiview'}});
  
//   const dispatch = useDispatch();

//   const [updatedProjectData, setUpdatedProjectData] = useState({
//     // Initialize with the updated data for the project
//     media: {
//       img: [
//         {
//           name: 'vitrina',
//           // Updated content for the 'vitrina' image object
//           // Include other properties if necessary
//           // Example:
//           URL: 'new_image_url',
//           description: 'New description',
//         },
//         // Include other image objects if necessary
//       ],
//       // Include other media types if necessary
//     },
//     // Include other fields if necessary
//   });

//   const handleUpdate = () => {
//     dispatch(putProject(updatedProjectData));
//   };

//   const [fileName, setFileName] = useState("");
//   const handleFile = (file) => {
//     setFileName(file.name);
//   };

//   return (
//     <div>
//       {/* Your form fields and UI */}
//       <button onClick={handleUpdate}>Update Project</button>
//       <br></br>
//       <FileUploader handleFile={handleFile} />
//       {fileName ? <p>Uploaded file: {fileName}</p> : null}
//     </div>
//   );
// }

// export default PutVitrinaForm;



import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileUploader from "./FileUploader.jsx";
import axios from "axios";
import { patchVitrina ,postProject } from "../../../redux/actions.js";

function PutVitrinaForm() {
  const [fileName, setFileName] = useState("");
  const [vitrinaImage, setVitrinaImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageDescription, setImageDescription] = useState('b');
  
  const dispatch = useDispatch();
  const cloudName = 'denjiview'; // Replace 'your_cloud_name' with your Cloudinary cloud name
  const cloudPreset = 'itjhsbrs'; // Replace 'your_cloud_name' with your Cloudinary cloud name

  const handleUpload = (file) => {

  };

  const handleUpdate = () => {
    // Dispatch action to update the project data
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
    //   let imageURL;
    //   if (
    //     vitrinaImage && (
    //       vitrinaImage.type === 'image/png' ||
    //       vitrinaImage.type === 'image/jpg' ||
    //       vitrinaImage.type === 'image/jpeg'
    //     )
    //   ) {
    //     const image = new FormData();
    //     image.append('file', vitrinaImage);
    //     image.append('cloud_name', `${cloudName}`);
    //     image.append('upload_preset', `${cloudPreset}`);
  
    //     const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, image);
  
    //     // If uploading image was successful, execute patchVitrina()
         dispatch(

           patchVitrina()
         )
  
    //     // Once patchVitrina() is done, execute postProject()
    //     await postProject({
    //       projectName: "Proyecto Café Web",
    //       type: "info",
    //       category: "active",
    //       img: {
    //         name: "vitrina",
    //         URL: `${response.data.url}`,
    //         description: `${imageDescription}`
    //       }
    //     });
  
    //     // After both patchVitrina() and postProject() are done, perform any additional tasks
    //     // ...
  
    //     // You can also dispatch any actions or handle state updates here if needed
  
    //     // Show success message or perform any other UI actions
    //     // Swal.fire('Proyecto actualizado y cargado exitosamente');
    //   }
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
  
  const handleFile = (file) => {
    // setFileName(file.name);
    // handleUpload(file);
  };

  return (
    <div>
      <br />
      <label>Elimar imagen anterior:</label>
      <button onClick={delImage} >❌</button>
      <br />
      <label>Seleccionar image:</label>
      <FileUploader handleFile={handleImageChange} />
      <br />
      {
      isLoading ? 
      ('Cargando...')  :
        (
          <>
          
          <label>Cargar Imagen: </label>
          <button onClick={uploadImage} >⬆️</button>
          
          </>

        )
      }
      <div>
        {/* {imagePreview &&  */}
        {/* ( */}
          <img src={`${imagePreview}`}
          alt='' />
        {/* ) */}
        {/* } */}
      </div>
    </div>
  );
}

export default PutVitrinaForm;
