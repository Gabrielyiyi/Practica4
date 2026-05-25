const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    const rutaDelArchivo = path.join(__dirname, 'index.html');
    res.sendFile(rutaDelArchivo);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
  console.log(`   Accesible en la red por: http://<TU_IP>:${PORT}`);
});