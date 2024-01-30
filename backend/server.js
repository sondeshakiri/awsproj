const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());


const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'myappdatabase.cdi22ggeq816.us-east-1.rds.amazonaws.com',
  user: 'admin',
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

