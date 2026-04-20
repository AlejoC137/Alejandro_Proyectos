const { getAllEntries, getEntryByKey } = require('../dataBase/functions.js');

const getAllProjectControler = async (req, res) => {
    try {
        // Pass 'projects' as table name
        const allProjectEntries = await getAllEntries('projects');
        res.json(allProjectEntries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
};

const getProjectByKeyControler = async (req, res) => {
    try {
        const { key, value } = req.query;
        const projectByKey = await getEntryByKey('projects', { key, value });
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