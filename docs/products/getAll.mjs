export default {
    get: {
        tags: ["Products"],
        description: "Get all products",
        operationId: "getAllProducts",
        parameters: [],
        response: {
            200: {
                description: "Get all products",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/compenents/schemas/products",
                        },
                    },
                },
            },
        },
    },
};