import "dotenv/config";
const PORT = process.env.PORT;

export default {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "RREGLO-NODEJS-API",
            version: "1.0.0",
            // description: "Express API"
        },
        servers: [{
            url: `http://localhost:${PORT}`
        }, {
            url: `http://localhost:8081`,
        }]
    },
    apis: ["./src/app/routers/*.ts"]
}