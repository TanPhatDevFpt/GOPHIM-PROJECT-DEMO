import { fetchapi } from "../setapi.js";
import { API } from "../containerApi.js";
const category = document.querySelector(".inner__catergory");
const api = `${API.category}`;
fetchapi(api)
.then((result)=>{
    let htmlcategory = "";
    result.category.forEach(item=>{
        htmlcategory += `
        <div class="category" style="background: ${item.gradient}">
            <a href="#${item.title}" class="category__item">
              <p class="title">${item.title}</p>
              <p class="description">
                Xem chủ đề <i class="fa-solid fa-angle-right"></i>
              </p>
            </a>
          </div>
        `;
    });
    category.innerHTML = htmlcategory;
});