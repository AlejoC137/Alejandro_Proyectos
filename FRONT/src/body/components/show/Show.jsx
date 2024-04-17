import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProjects } from "../../../redux/actions";

function Show(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Add any necessary initialization logic here
  }, []);

  const handleCartButton = (event) => {

    // console.log(props);
    dispatch(getAllProjects(props.category, props.id));

  };


  console.log(props.data);

  return (
    <div 
    className="border-pureRed border-4 ml-9 "
    key={props._id}
    >


      {props.data.projectName}
      {props.data.client}

    </div>  
  );
}

export default Show;
