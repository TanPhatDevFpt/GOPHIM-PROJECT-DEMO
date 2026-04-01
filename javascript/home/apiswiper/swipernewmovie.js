import { fetchapi } from "../setapi.js";
import { API } from "../containerApi.js";
const swiperWrapper = document.querySelector(".section4 .newmovie");
const api = `${API.swipernewmovie}`;
fetchapi( api)
  .then((data) => {
    let html = "";
    data.data.forEach((item)=>{
      html += `
            <div class="swiper-slide">
              <div class="item">
                <a href="${item.title}">
                  <div class="pin-new">
                  ${item.tm ? `<div class="pin-new-tm">${item.tm}</div>`: `<div class="pin-new-pd">${item.pd}</div>`}
                  </div>
                  <img
                    src=${item.img}
                  />
                  <div class="info">
                    <a class="title" href="${item.title}">${item.title}</a>
                    <a class="author" href="${item.title}">${item.author}</a>
                  </div>
                </a>
              </div>
            </div>
      `;
    });
    swiperWrapper.innerHTML = html;
    // render swiper
    new Swiper(".section4 .mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 15,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        allowTouchMove: true,
        threshold: 5,
        breakpoints: {
            0: {
                slidesOffsetAfter: 20
            },
            760: {
                slidesOffsetAfter: 210
            }
        }
    });
    //end render swiper
});