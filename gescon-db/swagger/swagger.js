const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger/swagger_output.json'
const endpointsFiles = ['././routes.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "GESCON API",
        description: "Documentation automatically generated by the <b>swagger.autogen</b> module."
    },
    host: "localhost:8888",
    basePath: "/api"
};

swaggerAutogen(outputFile, endpointsFiles, doc).then()