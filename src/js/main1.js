/* eslint-disable no-plusplus */
import { render } from "./common";
import { works, pots, user } from "./data";

function showProducts(products) {
    if (!Array.isArray(works) || works.length === 0) return [];
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `<div class ="border-b py-8 grid grid-cols-1 md:grid-cols-3 gap-8 ease-in-out duration-300 hover:shadow-xl hover:cursor-pointer group">
        <div class = "col-span-1">
        <a href ="worksdetail.html?id=${product.id}"><img src="src/img/${product.img}.jpg" class ="w-full" alt = "" /></a>
        </div>
        <div class = "col-span-2 items-center">
        <h2 class = "font-medium text-4xl my-4">
        <a href ="worksdetail.html?id=${product.id}">${product.title}</a>
        </h2>
        <p class = "my-6">
        <a href ="" class ="px-2 rounded-full bg-[#142850] text-white my-4">${product.date}
        </a> <span class="text-[#8695A4] px-6">${product.by}</span>
                </p>
            <a href="worksdetail.html?id=${product.id}" class="font-bold text-[12px] md:text-[16px] ">${product.description}.</a>
        </div>
        </div>
        `;
    }
    return result;
}

render("product", showProducts(works));

function showProduct(productss) {
    // kiểm tra
    if (!Array.isArray(user) || user.length === 0) return [];

    // xử lý
    let results = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < productss.length; i++) {
        const products = productss[i];
        results += `<div class="order-2 text-center md:text-left md:w-[606px]">
        <h2 class="font-bold text-3xl md:text-6xl my-6">
            ${products.title}
        </h2>
        <p class="font-medium text-[16px] my-4">
            ${products.description}
        </p>
        <div class ="ease-in-out duration-300 hover:shadow-xl hover:cursor-pointer group">
        <button class="my-5 bg-red-500 text-white text-xl font-bold px-4 py-2">
            Download Resume
        </button>
        </div>
    </div>
     <div class="order-1 md:col-span-1 md:order-2 justify-self-end px-5 my-4 w-[400px]">
        <img src="./src/img/${products.img}.jpg" class="mx-auto md:ml-auto md:-full mx-16 w-1/2  rounded-full"  alt="" />
    </div>`;
    }
    // return
    return results;
}

render("user", showProduct(user));

function showProductz(productss) {
    // kiểm tra
    if (!Array.isArray(pots) || pots.length === 0) return [];

    // xử lý
    let resultsz = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < productss.length; i++) {
        const potss = productss[i];
        resultsz += `<div class="bg-white p-5 my-5 ease-in-out duration-300 hover:shadow-xl hover:cursor-pointer group">
        <h2 class="font-bold text-4xl py-3">
            ${potss.title}
        </h2>
        <p class="font-bold text-xl py-6">
            ${potss.date}
            <span>|</span>
            <span> Design , Pattern </span>
        </p>
        <a href="" class="py-6 font-bold text-[16px]">${potss.description}</a>
    </div>`;
    }
    // return
    return resultsz;
}

render("pots", showProductz(pots));