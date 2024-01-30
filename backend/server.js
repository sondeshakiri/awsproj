const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3000;

// SQLite database setup
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run('CREATE TABLE data (id INT, name TEXT)');
    const stmt = db.prepare('INSERT INTO data VALUES (?, ?)');
    stmt.run(1, 'Donnée 1');
    stmt.run(2, 'Donnée 2');
    stmt.finalize();
});

// API endpoint to get data
app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM data', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
