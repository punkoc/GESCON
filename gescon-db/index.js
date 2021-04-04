const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(8888, (request, response)=> {
    console.log("Serviço iniciado na porta 8888");
});