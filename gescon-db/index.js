const express = require('express');
const http = require('http');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api", routes);

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerFile));

http.createServer(app).listen(8888);
console.log("Listening at:http://localhost:%s/api (HTTP)", 8888);