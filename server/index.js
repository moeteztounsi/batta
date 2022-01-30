const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const connectDB = require('./Database/dbConnection');
const {notFound, errorHandler} = require('./Middlewares/errorMiddleware');

connectDB();

const app = express();
const PORT = 7500;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit : "30mb",extended: true}));
app.use(cors());


app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{console.log(`Server is running on port : ${PORT}`)});
