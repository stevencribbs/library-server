<h1 align="center">Personal Library - Server</h1>

This project is centered around the conept of allowing a user to browse, add, and remove collected data such as quotes, verses, books, recipes, etc. It is designed to work as the server providing the database/API layer to work with the library-client project.<br /><br />

This project is built using Node.js and Express.js. It uses a MySQL database for storing the library data(the db_setup.sql file is provided to set up the database).
<br />

# Start Up

## yarn

```sh
yarn
```

```sh
yarn dev
```

# Database Setup

MySQL is used for the database. This project assumes that MySQL has already been installed and is running. The database table and connection information is currenlty hard-coded in the DBService.

The database structure is defined in, and can be set up, using the db_setup.sql file. This file is located in the root directory of the project.
