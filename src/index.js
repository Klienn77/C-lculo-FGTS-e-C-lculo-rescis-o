// Importa o módulo express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define uma rota de teste
app.get('/', (req, res) => {
  res.send('Aplicação rodando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
    