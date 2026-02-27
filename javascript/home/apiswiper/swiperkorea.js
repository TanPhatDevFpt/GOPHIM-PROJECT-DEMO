import { fetchapi } from "../setapi.js";
import { API } from "../containerApi.js";
const swiperWrapper = document.querySelector(".content__korea .swiper-wrapper");
const api = `${API.swiperkorea}`;
fetchapi( api)
  .then((data) => {
    let html = "";
    data.data.forEach((item)=>{
      html += `
            <div class="swiper-slide">
              <a href="#${item.title}">
                <div class="inner__img">
                  <img
                    src="${item.img}"
                  />
                  <div class="description">
                    <span>PĐ.</span>
                    <strong>${item.pd}</strong>
                  </div>
                </div>
                <div class="inner__content">
                  <a href="#${item.title}">${item.title}</a>
                  <p>${item.tag}</p>
                </div>
              </a>
            </div>
      `;
    });
    swiperWrapper.innerHTML = html;
});