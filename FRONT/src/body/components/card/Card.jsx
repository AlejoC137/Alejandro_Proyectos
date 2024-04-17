import React from "react";
import { useDispatch } from "react-redux";
import { getAllProjects } from "../../../redux/actions";
import { Link } from "react-router-dom";

function Card(props) {
  const dispatch = useDispatch();

  const handleCartButton = () => {
    dispatch(getAllProjects(props.category, props.id));
  };

  return (
    <div
      className= "border-black  border-b-2 border-r-2 border-l-0 border-t-0 max-h-20 w-96 p-2 flex-row mt-6"
      key={props.id}
      onClick={handleCartButton}
    >
      <Link to={`/detail/${props.category}=${props.id}`} className="flex items-center">
      <img
  className="w-16 grayscale hover:filter-none"
  src={
    props.media.img[0]
      ? props.media.img[0].URL
      : "https://humanconet.org/wp-content/uploads/2022/09/Anchincaya-Resiste-HC-01-1024x1024.webp"
  }
  alt="project media"
/>

        <h5 className=" ml-8 font-Montserrat font-bold text-2xl flex flex-col">{props.projectName}</h5>
      </Link>
    </div>
  );
}

export default Card;
