$(function () {
  // 開閉
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $(".p-drawer").toggleClass("is-open");
    $("#js-overlay").toggleClass("is-open");
    $("body").toggleClass("is-nav-open");
  });

  // オーバーレイ・メニュー内リンクで閉じる
  $("#js-overlay, .p-drawer a").on("click", function () {
    $("#js-hamburger").removeClass("is-active");
    $(".p-drawer").removeClass("is-open");
    $("#js-overlay").removeClass("is-open");
    $("body").removeClass("is-nav-open");
  });
});

// スライダー
const voiceSwiper = new Swiper(".p-top-voice__contents", {
  loop: true,
  slidesPerView: 1,        // SP:1枚
  spaceBetween: 20,
  navigation: {
    prevEl: ".p-top-voice__prev",
    nextEl: ".p-top-voice__next",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,    // PC:3枚
      spaceBetween: 35,
    },
  },
});
