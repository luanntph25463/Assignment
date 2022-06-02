const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./src/index.html"),
                detailProduct: resolve(__dirname, "./src/detail.html"),
                products: resolve(__dirname, "./src/product.html"),
            },
        },
    },
});