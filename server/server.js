const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ORGANELLE_URI;
mongoose.connect(uri, {useNewUrlParser: true,
    useCreateIndex: true, useUnifiedTopology: true},
    (err) => {
        if (err) throw err;
        console.log('db connected');
    }
);

const usersRouter = require('./routes/usersRouter');

app.use('/users', usersRouter);

const eventsRouter = require('./routes/eventRouter');

app.use('/events', eventsRouter);

const courseRouter = require('./routes/courseRouter');

app.use('/courses', courseRouter);

const icsRouter = require('./routes/icsIORouter');

app.use('/calendar', icsRouter);

const env = process.env.NODE_ENV;

if (process.env.NODE_ENV === "production") {

    // Set static folder
    // All the javascript and css files will be read and served from this folder
    //this is a new comment
    app.use(express.static("client/build"));

    // index.html for all page routes  html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server listening on port:', port);
});
