import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProjects } from "../../../redux/actions";
import { Link } from "react-router-dom";

function Card(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Add any necessary initialization logic here
  }, []);

  const handleCartButton = (event) => {

    // console.log(props);
    dispatch(getAllProjects(props.category, props.id));
  };

  return (
    <div 
    className="border-pureRed border-4"
    key={props.id}
    onClick={handleCartButton}
    >
   
      <Link
      to={`/detail/${props.category}=${props.id}`}>
      
      
      

      <h5>
        {props.projectName}
        {/* {props.descriptions} */}
      </h5>
      <img
        className="p-3 border-2"
        src={
          props.media.img[0]
          ? props.media.img[0].URL
          : "https://humanconet.org/wp-content/uploads/2022/09/Anchincaya-Resiste-HC-01-1024x1024.webp"
        }
        alt="project media"
        />

        </Link>
    </div>
  );
}

export default Card;
