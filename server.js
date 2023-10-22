const express = require('express');
require('dot-env');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connect = require('./src/db/connection');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const dbUrl = process.env.dbUrl || "mongodb+srv://chaithragr409:Chaithragr%401906@cluster0.e7abadk.mongodb.net/ChaitraDB";
const Router = require("./src/index.js");
const app = express();


connect(dbUrl).then(() => {

  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    return res.send({ status: "Ok" });
  })
  app.use('/apis', Router);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
)
