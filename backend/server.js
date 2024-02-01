const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// Utilisez le DNS privé du endpoint de la base de données
const db = mysql.createConnection({
  host: 'mydb.cdi22ggeq816.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: '14507329',
  database: 'mydb'
});

app.get('/api/getData', (req, res) => {
  const sql = 'SELECT * FROM etudiant'; // Utilisez le nom de la table 'etudiant'
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

