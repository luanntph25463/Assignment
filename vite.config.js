
/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./index.html"),
                works: resolve(__dirname, "./Works.html"),
                blog: resolve(__dirname, "./Blog.html"),
                wdt: resolve(__dirname, "./worksdetail.html"),
                a: resolve(__dirname, "./blog_detail.html"),

            },
        },
    },
});