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
            url: "https://event-api.onrender.com",
            description: "Production server",
        },
    ]
    :
    [
        {
            url: "http://localhost:3000/api/v1",
            description: "Development server",
        },
    ],
    components: {
        schemas:{
            Event: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    date: { type: "date" },
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
    Tags: [
        {
            name: "Events",
            description: "Endpoints for events",
        }
    ]
    },
    apis: ["src/**/*.ts"],
};

export const specs = swaggerJSDoc(options);