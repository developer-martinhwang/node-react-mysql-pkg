const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

// parse requests of content-type to application/json
app.use(express.json());
// parse requests of content-type to application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// node server looks at the build folder
app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});
// listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('node server is running on part' + PORT);
})

