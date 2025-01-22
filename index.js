// Importa o módulo express
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configura a pasta 'src' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Define a rota principal para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
