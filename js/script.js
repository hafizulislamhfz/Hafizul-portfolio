function fadeOutPreloader() {
  setTimeout(function () {
    var preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";
      setTimeout(function () {
        preloader.style.display = "none";
      }, 500);
    }
  }, 1000);
}

window.addEventListener("load", function () {
  fadeOutPreloader();
});
window.addEventListener("scroll", function () {
  fadeOutPreloader();
});

$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Fullstack Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: false,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Fullstack Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
      },
    },
  });

  //skill title
  $(".skill").hover(
    function () {
      var newText = $(this).data("text");
      $("#skill-title")
        .text("")
        .append(
          '<span aria-hidden="true" id="skill-title-span">' +
            newText +
            "</span>" +
            newText
        );
    },
    function () {
      $("#skill-title")
        .text("")
        .append(
          '<span aria-hidden="true" id="skill-title-span">My Skills</span>My Skills'
        );
    }
  );

  // $( ".skill" ).mouseenter(function() {
  //     $(this).prev().addClass("translate");
  //     $(this).next().addClass("translate");
  //     $(this).prev().prev().slice(0, 2).addClass("translate1");
  //     $(this).next().next().slice(0, 2).addClass("translate1");
  //   });

  // $( ".skill" ).mouseleave(function() {
  //   $(this).prev().removeClass("translate");
  //   $(this).next().removeClass("translate");
  //   $(this).prev().prev().slice(0, 2).removeClass("translate1");
  //   $(this).next().next().slice(0, 2).removeClass("translate1");
  // });

  ///work sections
  $(".work-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });

  var lastHovered1 = $(".work-1:nth-child(2)");
  var lastHovered2 = $(".work-2:nth-child(2)");
  var lastHovered3 = $(".work-3:nth-child(2)");
  var lastHovered4 = $(".work-4:nth-child(2)");
  var lastHovered5 = $(".work-5:nth-child(2)");
  var lastHovered6 = $(".work-6:nth-child(2)");
  var lastHovered7 = $(".work-7:nth-child(2)");
  var lastHovered8 = $(".work-8:nth-child(2)");
  var lastHovered9 = $(".work-9:nth-child(2)");

  $(`
    .work-1:nth-child(2),
    .work-2:nth-child(2),
    .work-3:nth-child(2),
    .work-4:nth-child(2),
    .work-5:nth-child(2),
    .work-6:nth-child(2),
    .work-7:nth-child(2),
    .work-8:nth-child(2),
    .work-9:nth-child(2)
    `).addClass("active");

  $(".work-1").hover(function () {
    lastHovered1.removeClass("active");
    $(this).addClass("active");
    lastHovered1 = $(this);
  });

  $(".work-2").hover(function () {
    lastHovered2.removeClass("active");
    $(this).addClass("active");
    lastHovered2 = $(this);
  });

  $(".work-3").hover(function () {
    lastHovered3.removeClass("active");
    $(this).addClass("active");
    lastHovered3 = $(this);
  });

  $(".work-4").hover(function () {
    lastHovered4.removeClass("active");
    $(this).addClass("active");
    lastHovered4 = $(this);
  });

  $(".work-5").hover(function () {
    lastHovered5.removeClass("active");
    $(this).addClass("active");
    lastHovered5 = $(this);
  });

  $(".work-6").hover(function () {
    lastHovered6.removeClass("active");
    $(this).addClass("active");
    lastHovered6 = $(this);
  });

  $(".work-7").hover(function () {
    lastHovered7.removeClass("active");
    $(this).addClass("active");
    lastHovered7 = $(this);
  });

  $(".work-8").hover(function () {
    lastHovered8.removeClass("active");
    $(this).addClass("active");
    lastHovered8 = $(this);
  });

  $(".work-9").hover(function () {
    lastHovered9.removeClass("active");
    $(this).addClass("active");
    lastHovered9 = $(this);
  });

  //CV download
  $("#download").click(function (e) {
    var link = $(this);
    var originalText = link.html();
    link.html('<i class="fas fa-spinner fa-spin"></i>');
    setTimeout(function () {
      link.html(originalText);
      $("#love-messege").delay(8000).fadeOut("slow").show();
    }, 1000);
  });

  // get message
  var form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    status.innerHTML = "Sending...";
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Your Message Succesfully Sent.";
          $("#love-messege").delay(8000).fadeOut("slow").show();
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML = "Opps!Sending Failed.";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Opps!Sending Failed.";
      });
  }
  form.addEventListener("submit", handleSubmit);

  // aniamtion part
  // AOS.init({
  //   duration: 1000,
  //   delay: 50,
  // });

  //preloader
  // $(window).on('load scroll', function(){
  //   $("#preloader").delay(1000).fadeOut("slow");
  // });
  // $('.nav-btn, .scroll-up-btn').on('click', function(){
  //   $("#preloader").delay(2000).fadeOut("slow").show();
  // });
});
