// const express = require("express");
// const cors = require("cors");
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();

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

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to library server.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
