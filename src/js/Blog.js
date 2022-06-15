<<<<<<< HEAD
import { render } from "./common";
import { Blog } from "./data";

function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(Blog) || Blog.length === 0) return [];

    // xử lý
    let result = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += ` <div class="border-b py-8 max-w-3xl m-3 px-5 mx-auto bg-white py-10">
        <h1><a href="blog_detail.html?id=${product.id}" class="font-bold text-4xl ">${product.title}</a></h1>
        <p class="font-bold my-4">${product.date}</p>
        <a href="blog_detail.html?id=${product.id}"><p class="font-bold">${product.description}</p> </a>  
     </div>`;
    }
    // return
    return result;
}

=======
import { render } from "./common";
import { Blog } from "./data";

function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(Blog) || Blog.length === 0) return [];

    // xử lý
    let result = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += ` <div class="border-b py-8 max-w-3xl m-3 px-5 mx-auto bg-white py-10">
        <h1><a href="blog_detail.html?id=${product.id}" class="font-bold text-4xl ">${product.title}</a></h1>
        <p class="font-bold my-4">${product.date}</p>
        <a href="blog_detail.html?id=${product.id}"><p class="font-bold">${product.description}</p> </a>  
     </div>`;
    }
    // return
    return result;
}

>>>>>>> 73553ea3814a715d936688fa23a42b586ff23514
render("blog", showProducts(Blog));