/*----------------------------------------------------------------------------------
-------------------------------------- SLIDE ---------------------------------------
-----------------------------------------------------------------------------------*/

const slideButtons = document.querySelectorAll(".btn_carousel");
const slideImages = document.querySelectorAll(".slide");

slideButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      iconeBurger.style.display = "block";
      iconeClose.style.display = "none";
    }

    const calculNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");
    newIndex = calculNextSlide + [...slideImages].indexOf(slideActive);
    if (newIndex < 0) {
      newIndex = [...slideImages].length - 1;
    }
    if (newIndex >= [...slideImages].length) {
      newIndex = 0;
    }

    slideImages[newIndex].classList.add("active");
    slideActive.classList.remove("active");
  });
});

/*----------------------------------------------------------------------------------
-------------------------------- MENU BURGER ---------------------------------------
-----------------------------------------------------------------------------------*/

const btnMenu = document.getElementById("btn-burger-menu");
const menu = document.getElementById("menu");
const iconeBurger = document.getElementById("icone_burger");
const iconeClose = document.getElementById("icone_close");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    iconeBurger.style.display = "none";
    iconeClose.style.display = "block";
  } else {
    iconeBurger.style.display = "block";
    iconeClose.style.display = "none";
  }
});

/*----------------------------------------------------------------------------------
------------------------------------ GALLERY ---------------------------------------
-----------------------------------------------------------------------------------*/

const popupBg = document.getElementById("popup_background");
const popupImg = document.getElementById("popup_img");
const galleryItems = [...document.querySelectorAll(".grid_item")];
const galleryImg = [...document.querySelectorAll(".grid_img")];
const btnClosePopup = document.getElementById("popup_close");

function openImg(e) {
  let gridItemClicked = e.target.closest(".grid_item");
  let clickedImageName = gridItemClicked.id;
  let imageAlt = e.target.alt;
  popupBg.classList.add("active");
  popupImg.src = `/frontend/assets/img/works/${clickedImageName}.webp`;
  popupImg.alt = imageAlt;
}

function closeImg() {
  popupBg.classList.remove("active");
}

galleryItems.forEach((image) => {
  image.addEventListener("click", openImg);
});

popupImg.addEventListener("click", (e) => e.stopPropagation());
btnClosePopup.addEventListener("click", closeImg);
popupBg.addEventListener("click", closeImg);
