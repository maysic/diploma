document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form-container")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
});

//nav
document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".header__hide-menu").classList.add("active");
})


document.querySelector(".header__close").addEventListener("click", function() {
  document.querySelector(".header__hide-menu").classList.remove("active");
});

//menu
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__item-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__container-dropdown");

    document.querySelectorAll(".header__item-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".header__container-dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
});

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__list-lvl2")) {
    document.querySelectorAll(".header__container-dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".header__item-btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
});


//simplebar

new SimpleBar(document.querySelector(".simplebar"), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
