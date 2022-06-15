import { render } from "./common";
import { works } from "./data";

const id = new URLSearchParams(window.location.search).get("id");

const product = works.find((items) => items.id === +id);
const result = `<div class="max-w-3xl px-5 mx-auto">
<div class="grid grid-cols-1 gap-5">
    <h1 class="font-bold text-4xl my-10 max-w-3xl m-3 mx-auto bg-white">${product.id}</h1>
    <p><a href="" class="px-2 rounded-lg bg-[#FF7C7C] my-10 text-white my-4">${product.date}</a></p>
    <p href="" class="font-bold py-10">${product.description}</p>
    <div class="col-span-1">
        <img src="src/img/${product.img}.jpg" class="w-full" alt="">
    </div>
</div>
</div>
<div class="max-w-3xl px-5 mx-auto ">
<div class="grid grid-cols-1 gap-5">
    <h1 class="font-bold text-4xl my-10 max-w-3xl m-3 bg-white">Heading 1</h1>
    <p class="font-bold text-2xl">Heading 2</p>
    <p class="font-bold py-10">${product.shortdecripton}</p>
        <div class="col-span-1">
            <img src="src/img/${product.img1}.png" class="w-full" alt="">
        </div>
        <div class="col-span-1">
            <img src="src/img/${product.img2}.png" class="w-full" alt="">
        </div>
</div>
</div>`;
render("works", result);