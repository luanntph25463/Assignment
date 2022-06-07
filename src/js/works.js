import render from "./common";
import { works } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
console.log("id", id);
const product = works.find((item) => item.id === id);
const result = `
<div
        class="grid grid-cols-1 md:grid-cols-3 gap-5 ease-in-out duration-300 hover:shadow-xl hover:cursor-pointer group">
        <div class="col-span-1">
           <a href="Works.html?id=${product.id}"> <img src="src/img/${product.img}.jpg" class="w-full" alt="" /></a>
        </div>
        <div class="col-span-2 items-center">
            <h2 class="font-medium text-4xl my-4">
            <a href="Works.html?id=${product.id}">${product.title}</a>
            </h2>
            <p>
                <a href="" class="px-2 rounded-lg bg-[#142850] text-white my-4">${product.date}
                </a>
            </p>
            <a href="Works.html?id=${product.id}" class="font-bold text-2xl">${product.description}.</a>
        </div>
        <hr class="my-7 w-full font-bold" />
    </div>
`;
render("works", result);