const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const db = require('./config/db');
const app = express();


app.use(express.json());
dotenv.config({ path: './config/config.env' });

// Connect to database
db.authenticate().then(() => console.log('Base de datos conectada...')).catch(err => console.log('Error' + err));

// Routes
const auth = require('./routes/auth');

// Mount routers
app.use('/api/v1/auth', auth);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en modo ${process.env.NODE_ENV} en el puerto ${process.env.PORT}`);
});