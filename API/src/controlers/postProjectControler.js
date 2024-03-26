
/*
=data=============================================================
JavaScripFile: getUserController.js
Objetive:  Archivo que permite obtener los usuarios registrados
Author: alejoc.137
Creation: 26 de february de 2023
==================================================================
Manifiesto de funciones:
==Methods==
===========
=functions=
 getUserController = Funcion que permite Obtener todos los usuarios registrados, al buscarlos por email
==========
*/




const {Sequelize, Op} = require("sequelize");
const axios = require("axios");
const { Project } = require('../models/projectModel.js')

const {
    createProjectInstance , 
    getAllEntries , 
    getEntryByKey ,
    deleteEntryByKey,
    editFieldById
                     } = require('../dataBase/funtions.js')
// require('dotenv').config


const postProjectControler = async (req, res) => {
   
   const dataProject = req.body
   
    try {
 

        createProjectInstance(dataProject , Project , {db:"projects" , collection: dataProject.category }) 
        res.status(200).json(`${dataProject.name} creado!`);



    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  };

  module.exports = { 

    postProjectControler
  
 };