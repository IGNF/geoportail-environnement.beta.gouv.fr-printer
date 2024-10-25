
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const generatePdf = async (req, res) => {
    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-extensions', '--no-zygote'],
            dumpio: true,
            headless: true
        });

        const page = await browser.newPage();
        const htmlContent = await new Promise((resolve, reject) => {
            res.render('reportTemplate', { query: req.body }, (err, html) => {
                if (err) reject(err);
                else resolve(html);
            });
        });

        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        const finalPdfPath = path.join(__dirname, 'Fiches_Foreg.pdf');
        await page.pdf({
            path: finalPdfPath,
            format: 'A4',
            landscape: false,
            printBackground: true,
            displayHeaderFooter: false,
        });

        await page.close();
        await browser.close();

        res.setHeader('Content-Disposition', 'attachment; filename="Fiches_Foreg.pdf"');
        res.contentType('application/pdf');
        res.sendFile(finalPdfPath);

    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};

const generateHTML = async (req, res) => {
    try {
        const html = await new Promise((resolve, reject) => {
            res.render('reportTemplate', { query: req.query }, (err, html) => {
                if (err) reject(err);
                else resolve(html);
            });
        });

        res.send(html);

    } catch (err) {
        console.error(err);
        res.status(500).send('Error generating HTML');
    }
};



module.exports = {
    generatePdf,
    generateHTML
};
