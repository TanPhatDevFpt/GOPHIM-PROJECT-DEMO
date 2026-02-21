const slider = document.querySelector(".slider");
import { fetchapi } from "../setapi.js";
fetchapi(
  "https://web-gophim-project-default-rtdb.firebaseio.com/slider_section1.json",
).then((result) => {
  let html = "";
  let htmlmini = "";
  const slidermini = document.querySelector(".slider__mini");
  result.forEach((item) => {
    html += `<div class="slide ${item.slider == "active" ? "active" : ""}">
          <div class="item">
            <div class="inner__img">
              <img
                src="${item.img}"
              />
            </div>
            <div class="inner__content">
              <h3>
                <a href="#${item.title}">${item.title}</a>
              </h3>
              <a class="meta__tag" href="#45">${item.meta_tag}</a>
              <div class="inner__meta">
                <p class="meta__item">GOPHIM</p>
                <p>${item.year}</p>
                <p>${item.session}</p>
                <p>${item.practice}</p>
              </div>
              <div class="meta__fullhd">
                <span>Full HD</span>
              </div>
              <div class="description">
                <p>
                ${item.description}
                </p>
              </div>
              <a class="btn_playvideo" href="#${item.title}">
                <i class="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>`;
    slider.innerHTML = html;
    htmlmini += `
          <div class="item ${item.slider == "active" ? "active" : ""}">
          <img src="${item.img}"/>
          </div>
          `;
    slidermini.innerHTML = htmlmini;
  });
  // slider mini
const slide = document.querySelectorAll(".slide");
const item = document.querySelectorAll(".slider__mini .item");
item.forEach((e, index) => {
  e.addEventListener("click", (e) => {
    slide.forEach((del) => del.classList.remove("active"));
    item.forEach((del) => del.classList.remove("active"));
    slide[index].classList.add("active");
    e.currentTarget.classList.add("active");
  });
});
// end slider mini
});
