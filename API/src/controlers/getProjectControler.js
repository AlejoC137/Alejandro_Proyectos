
/*
=data=============================================================
JavaScripFile: getUserController.js
Objetive:  Projectivo que permite obtener los usuarios registrados
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
const {
    createProjectInstance , 
    getAllEntries , 
    getEntryByKey ,
    deleteEntryByKey,
    editFieldById
                     } = require('../dataBase/funtions.js')
// require('dotenv').config


const getAllProjectControler = async (req, res, category) => {
    try {
        // Respond with the category extracted from query parameters
        const  allProjectEntrys = await getAllEntries( {db: "projects" , collection: category } )
        res.json(allProjectEntrys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
};
const getProjectByKeyControler = async (req, res, search ) => {
    try {

        // Respond with the category extracted from query parameters
        const  projectByKey = await getEntryByKey( {db: "projects" , collection: search.category } , {key: search.key , value: search.value } )
        
        // .then(result => {
        //     // Access and use properties of the retrieved object
        //     // Continue using other properties as needed
        // })
        // .catch(error => {
        //     console.error('Error:', error); // Handle errors if any
        // });

        res.json(projectByKey);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
};

module.exports = {
    getAllProjectControler,
    getProjectByKeyControler
};