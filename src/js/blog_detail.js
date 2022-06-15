import { render } from './common';
import { Blog } from './data';

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get('id');

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
console.log('Blog', Blog);
const product = Blog.find((item) => item.id === +id);
const result = `
<div class="max-w-3xl px-5 mx-auto ">
            <div class="grid grid-cols-1 gap-5">
                <h1 class="font-bold text-4xl my-10 max-w-3xl m-3 mx-auto bg-white">${product.title}</h1>
                <p><a href="" class="px-2 rounded-lg bg-[#FF7C7C] my-10 text-white my-4">${product.date}</a><span class="px-6 font-bold ">Dashboard, User Experience Design </span></p>
                <p class="font-bold py-10">${product.description}</p>
                    <div class="col-span-1">
                        <img src="${product.img}" class="w-full" alt="">
                    </div>
            </div>
        </div>
        <div class="max-w-3xl px-5 mx-auto ">
            <div class="grid grid-cols-1 gap-5">
                <h1 class="font-bold text-4xl my-10 max-w-3xl m-3 bg-white">Heading 1</h1>
                <p class="font-bold text-2xl">Heading 2</p>
                <p class="font-bold py-10">${product.shortdecripton}</p>
                    <div class="col-span-1">
                        <img src="${product.img1}" class="w-full" alt="">
                    </div>
                    <div class="col-span-1">
                        <img src="${product.img2}" class="w-full" alt="">
                    </div>
            </div>
        </div>
`;
render('blog', result);
