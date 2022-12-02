//--------------hambMenu--------------------------
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector(".menu__list").cloneNode(1);

const hambHandler = (e) => {
  e.preventDefault();
  popup.classList.toggle("open");
  renderPopup();
}

const renderPopup = () => {
  popup.appendChild(menu);
  console.log(popup);

}
hamb.addEventListener("click", hambHandler );

//-----------------Slider-----------------------------
var swiper = new Swiper(".slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
