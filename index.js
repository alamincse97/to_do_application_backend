const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors()); 

app.get("/", (req, res) => {
    const message = "Hello world from the backend";
    res.json({message});
});

app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`);
});