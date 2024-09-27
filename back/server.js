const app = require('./app');
const connectDatabase = require('./config/database');
const cloudinary= require("cloudinary")


//Seteamos archivo de configuracion
if(process.env.NODE_ENV==="PRODUCTION") require('dotenv').config({path:'back/config/config.env'})


// const dotenv = require("dotenv");
// dotenv.config({path:'back/config/config.env'})

// llamao al modulo connetdatabase que a la ves importa la ruta donde es creada
connectDatabase();


//Configurar Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
});

// DB_LOCAL_URI=mongodb://localhost:27017/jose
