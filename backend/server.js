const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '14507329',
  database: 'mydatabase'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connecté à la base de données MySQL');
});

app.get('/api/getData', (req, res) => {
  const sql = 'SELECT * FROM votre_table';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

