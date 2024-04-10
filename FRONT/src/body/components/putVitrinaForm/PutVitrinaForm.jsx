import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileUploader from "./FileUploader.jsx";
import { Cloudinary } from "@cloudinary/url-gen";
// import { Cloudinary as CoreCloudinary } from "cloudinary-core";

function PutVitrinaForm() {
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();
  const cloudName = 'your_cloud_name'; // Replace 'your_cloud_name' with your Cloudinary cloud name
  const cld = new Cloudinary({ cloud: { cloudName } });

  const handleUpload = (file) => {
    cld.upload(file, { public_id: "vitrina" }, function (error, result) {
      if (!error) {
        console.log("Upload success:", result);
        // You may want to update the URL and description of the 'vitrina' image in your state here
      } else {
        console.error("Upload error:", error);
      }
    });
  };

  const handleUpdate = () => {
    // Dispatch action to update the project data
  };

  const handleFile = (file) => {
    setFileName(file.name);
    handleUpload(file);
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Project</button>
      <br />
      <FileUploader handleFile={handleFile} />
      {fileName ? <p>Uploaded file: {fileName}</p> : null}
    </div>
  );
}

export default PutVitrinaForm;
