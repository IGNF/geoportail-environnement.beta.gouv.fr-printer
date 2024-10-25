const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { formatDate } = require('./services/dateService'); // Importation de la fonction formatDate

// Importer les routes pour la génération de PDF
const pdfRoutes = require('./routes/pdfRoutes');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Utiliser les routes pour PDF
app.use('/pdf', pdfRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Assurez-vous que le chemin vers vos templates EJS est correct

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Rendre la fonction formatDate disponible dans toutes les vues EJS
app.locals.formatDate = formatDate;


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
