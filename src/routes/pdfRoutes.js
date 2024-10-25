const express = require('express');
const router = express.Router();
const { generatePdf } = require('../utils/pdfGenerator');
const { generateHTML } = require('../utils/pdfGenerator');

// Route pour générer le PDF avec POST
router.post('/generate-pdf', async (req, res) => {
    try {
        await generatePdf(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating PDF');
    }
});

// Route pour générer le HTML avec GET
router.get('/generate-html', async (req, res) => {
    try {
        await generateHTML(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating HTML');
    }
});


module.exports = router;


