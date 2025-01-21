const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'database-1.c9i6kyw8ydjn.us-east-1.rds.amazonaws.com',    
    user: 'admin',
    password: '#Fabiano77',
    database: 'calculo_rescisao_fgts'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar:', err);
        return;
    }
    console.log('Conectado ao banco de dados!');
});



connection.query('SELECT * FROM calculos', (err, results) => {
    if (err) throw err;
    console.log(results);
});
