const slider = document.querySelector(".slider");
import { fetchapi } from "../setapi.js";
fetchapi("./database/home/slider.json")
.then((result)=>{
  let html = "";
  result.forEach(item =>{
    if(item.slider == "active"){
      html += `<div class="slide active">
          <div class="item">
            <div class="inner__img">
              <img
                src="${item.img}"
              />
            </div>
            <div class="inner__content">
              <h3>
                <a href="#">${item.title}</a>
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
              <a class="btn_playvideo" href="#">
                <i class="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>`;
        slider.innerHTML = html;
    }
    if(item.slider !== "active"){
      html += `<div class="slide">
          <div class="item">
            <div class="inner__img">
              <img
                src="${item.img}"
              />
            </div>
            <div class="inner__content">
              <h3>
                <a href="#">${item.title}</a>
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
              <a class="btn_playvideo" href="#">
                <i class="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>`;
        slider.innerHTML = html;
    }
  });
  let index = 0;
  const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 10000);
});