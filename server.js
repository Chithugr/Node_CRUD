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

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");

// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Library API",
//       version: "1.0.0",
//       description: "Swagger API in Nodejs",
//       termsOfService: "http://example.com/terms/",
//       contact: {
//         name: "API Support",
//         url: "http://example.com/support",
//         email: "support@example.com",
//       },
//     },
//   },

//   servers: [
//     {
//       url: "http://localhost:3000",
//       description: "My API Documemtation",
//     },
//   ],
//   apis: ["./src/routes/*.js"]
// }
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "My API Documentation",
      },
    ],
  },
  apis: ["./src/routes/postRouter.js"],
};




connect(dbUrl).then(() => {

  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    return res.send({ status: "Ok" });
  })
  app.use('/apis', Router);
  const specs = swaggerJsDoc(options);

  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
)
