import { categoryProducts } from "./Data/categoryProducts.js";

/****** */
let product_listEl = document.querySelector(".product_list");
let product_listHTML = "";
// console.log(categoryProducts)

categoryProducts.forEach((e1) => {
  product_listHTML += ` 
    <div class="product_item">
        <a href="${e1.link}">
            <div class="product_image">
                <img src="${e1.img}">
            </div>
            <p class="product_name">
            ${e1.name}

            ${e1.subNavigation ? `<i class = "fa-solid fa-angle-down product_icon_more"></i>` : ""
        }
            </p>
        </a>
    </div>
    `
})
product_listEl.innerHTML = product_listHTML
console.log(product_listHTML)
