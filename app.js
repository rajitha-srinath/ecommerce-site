const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
require('dotenv').config();

// app
const app = express();

// dB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connected'));

// routes middleware
app.use('/api', userRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});