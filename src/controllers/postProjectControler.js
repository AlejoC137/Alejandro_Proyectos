const { createProjectInstance } = require('../dataBase/functions.js');

const postProjectControler = async (req, res) => {
   const dataProject = req.body;
   
    try {
        await createProjectInstance(dataProject, 'projects'); 
        res.status(200).json(`${dataProject.name} creado!`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
};

module.exports = { 
    postProjectControler
};