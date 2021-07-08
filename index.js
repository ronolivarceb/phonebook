var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'))

// Register routes
app.use('/', [
    require('./routes/phones')
]);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});