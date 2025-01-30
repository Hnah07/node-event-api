import swaggerJSDoc from "swagger-jsdoc";
import { isProduction } from "./helpers";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Event API",
            version: "1.0.0",
            description: "Event API",
        },
    servers: isProduction ? [
        {
            url: "https://node-event-api.onrender.com",
            description: "Production server",
        },
    ]
    :
    [
        {
            url: "http://localhost:3000/api",
            description: "Development server",
        },
    ],
    components: {
        schemas:{
            Event: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    date: { type: "string", format: "date" },
                    location: { type: "string" },
                    description: { type: "string" },
                    isFree: { type: "boolean" },
                },
            },
            Error: {
                type: "object",
                properties: {
                    message: { type: "string" },
                },
            },
        }
    },
    tags: [
        {
            name: "Events",
            description: "Endpoints for events",
        }
    ]
    },
    apis: ["**/*.ts"],
};

export const specs = swaggerJSDoc(options);