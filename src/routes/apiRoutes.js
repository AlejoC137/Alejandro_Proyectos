const { Router } = require('express');
const { getAllProjectControler, getProjectByKeyControler } = require('../controllers/getProjectControler.js');
const { postProjectControler } = require('../controllers/postProjectControler.js');

const router = Router();

// GET /project
router.get('/project', getAllProjectControler);

// POST /project
router.post('/project', postProjectControler);

// GET /items
router.get('/items', async (req, res) => {
    try {
        res.json([]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET /infomain
router.get('/infomain', async (req, res) => {
    try {
        console.log("Serving /api/infomain request");
        res.json({});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
