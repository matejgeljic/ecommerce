const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

//import routes
const userRoutes = require('./routes/user');

//app
const app = express();

//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'))

//routes middlware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});