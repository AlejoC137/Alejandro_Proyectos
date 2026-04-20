import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MenuBar.module.css";
import {
  CODE,
  SOCI,
  ARCH,
  ALE,
} from "../../../redux/actions-types.js";
import {
  getAllProjects,
  getMainProfile,
  getMaindefinitions,
  setMenuBarOption,
} from "../../../redux/actions.js";
import InfoCol from "../infoCol/InfoCol.jsx";
import MenuOpt from "./MenuOpt.jsx";

export default function MenuBar(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(mainDerinitions);
  }, []);
  const mainDerinitions = useSelector((state) => state.mainDefinitions);

  const userAuth = useSelector((state) => state.userAuth);
  const [userInfo, setUserInfo] = useState(false);
  const Visitor = useSelector((state) => state.visitorData);
  const MenuBarOption = useSelector((state) => state.MenuBarOption);

  const handleOnClick = (e) => {
    dispatch(setMenuBarOption(e));
    // console.log(e);
  };

  return (
    <div className="ml-4">
      <MenuOpt
        tittle="DEV"
        keyName={CODE}
        name="DESARROLLO"
        // definition={props.definitions}
      ></MenuOpt>

      <br />

      <MenuOpt
        tittle="ARQ"
        keyName={ARCH}
        name="ARQUITECTURA"
        // definition={props.definitions}
      ></MenuOpt>

      <br />

      <MenuOpt
        tittle="ACT"
        keyName={SOCI}
        name="ACTIVISMO"
        // definition={props.definitions}
      ></MenuOpt>

      <br />
    </div>
  );
}
