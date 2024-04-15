import axios from "axios"; 
import { v4 as uuidv4 } from "uuid"; 
import moment from "moment"; 
import _ from 'lodash'; 
import chalk from 'chalk'; 
import express from 'express'; 
import { fileURLToPath } from 'url'; 
import path from 'path'; 

const app = express(); // Crea una instancia de la aplicación Express
const pacientes = []; // Arreglo para almacenar los datos de los pacientes


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      console.error("Error al enviar el archivo HTML:", err);
      res.status(500).send('¡Se ha producido un error al enviar el archivo HTML!');
    } else {
      console.log("Archivo HTML enviado correctamente.");
    }
  });
});

// Consulta a la API para obtener datos de pacientes
axios.get("https://randomuser.me/api/?results=11")
  .then((response) => {
    response.data.results.forEach((usuario) => {
      
      const paciente = `Nombre: ${usuario.name.first} Apellido: ${usuario.name.last} Genero: ${usuario.gender} ID: ${uuidv4()} Timestamp: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
      pacientes.push(paciente);
    });
    // Imprime la lista de pacientes en la consola con estilo usando Chalk
    console.log(chalk.blue.bgWhite('LISTA DE USUARIOS:'));
    pacientes.forEach(p => console.log(chalk.blue.bgWhite(p)));
  })
  .catch((error) => {
    console.error("Error en la consulta a la API:", error);
  });

// Ruta para obtener pacientes agrupados por género
app.get("/usuarios", (req, res) => {
  // Agrupa los pacientes por género utilizando Lodash y los envía como respuesta en formato JSON
  const pacientesPorGenero = _.groupBy(pacientes, (paciente) => {
    const datosPaciente = paciente.split(' ');
    return datosPaciente[3];
  });
  res.json(pacientesPorGenero);
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send('¡Ruta no encontrada!');
});

// Middleware para manejar otros errores
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send('¡Se ha producido un error!');
});

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`); 
});
