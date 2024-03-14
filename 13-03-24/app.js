const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connection');
const response = require('./helpers/response')
const TodoRoute = require('./Routes/TodoRoute')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = 6666;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
})


app.use('/api/todos', TodoRoute)