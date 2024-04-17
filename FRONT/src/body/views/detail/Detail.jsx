// Detail.jsx
import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, postProject, getMainProfile } from '../../../redux/actions.js';
import Show from '../../components/show/Show.jsx'
import styles from './Detail.module.css';
import MenuBar from "../../components/MenuBar/MenuBar.jsx";
import MainCharacterDisplayInfo from "../../components/mainCharacterDisplayInfo/MainCharacterDisplayInfo.jsx";
import InfoCol from "../../components/infoCol/InfoCol.jsx";
import InfoDet from "../../components/infoCol/InfoDet.jsx";
import { useParams } from "react-router-dom";

function Detail() {
  const { data } = useParams();

  function splitString(inputString) {
    const [key, value] = inputString.split("=");
    return { key, value };
  }

  const dispatch = useDispatch();
  useEffect(() => {
    const { key, value } = splitString(data);
    dispatch(getAllProjects(key, value));
  }, []);

  const Visitor = useSelector(state => state.visitorData);
  const Project = useSelector(state => state.projectById);

  return (
    <div className="flex flex-grow">
      {/* NavBar y Footer se mantienen aquí, ya que Detail tiene que ocupar todo el espacio disponible */}
      <InfoDet data={Project} />
      <div>
        <br />
        <Show data={Project} />
      </div>
    </div>
  );
}

export default Detail;
