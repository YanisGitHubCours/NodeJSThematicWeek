// DOC for IIFE: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
//DOC for Axios: https://axios-http.com/docs/example
// DOC Async function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

import axios from "axios"

const getProducts = () => {
    axios.get('http://localhost:3011/products')
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
        });
};

const addProduct = () => {
    axios.post('http://localhost:3011/products', {
        name: 'pomme',
        quantity: 5
    })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}

const getProductsAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            axios.get('http://localhost:3011/products')
                .then((response) => {
                    resolve(response.data);
                });
        }, 2000);
    });
}


//IIFE
(() => {
    getProducts();
    addProduct();
})();

//ASYNC IIFE
(async () => {
    const res = await getProductsAsync();
    console.log(res)
})();


