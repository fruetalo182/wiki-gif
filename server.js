const express = require('express');
const dotenv = require('dotenv');
const gifsRouter = require('./routes/gifs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Rutas
app.use('/api', gifsRouter);

// Servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
