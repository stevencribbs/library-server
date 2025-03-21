import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sticks',
  database: 'library',
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to database', err);
    throw err;
  }
  console.log('Connected to database');
});
