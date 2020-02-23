const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const db = require('./config/db');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: './config/config.env' });

// Connect to database
db.authenticate().then(() => console.log('Base de datos conectada...')).catch(err => console.log('Error' + err));

// Routes
const auth = require('./routes/auth');

// Mount routers
app.use('/api/v1/auth', auth);

// static folder
app.use(express.static(path.join(__dirname, 'pages')));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en modo ${process.env.NODE_ENV} en el puerto ${process.env.PORT}`);
});