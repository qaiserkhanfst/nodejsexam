//create express application using best practice
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
})