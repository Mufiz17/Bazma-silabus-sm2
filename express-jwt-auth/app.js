const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const AuthRoute = require('./Routes/AuthRoute')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/auth', AuthRoute)

const PORT = 3333 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});