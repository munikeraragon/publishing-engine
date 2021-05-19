 const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'SuperSecretPassword',
  database: 'blog'
});
 

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
