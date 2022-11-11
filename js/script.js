document.getElementById("left").innerText = "<Header";
document.getElementById("middle").innerText = "{M:Gafarov} ";
document.getElementById("right").innerText = " />";

// Fixed Navigation Bar all over the page
$(window).scroll(() => {
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
    $(".sc-media").addClass("make-fixed");
  } else {
    $(".sc-media").removeClass("make-fixed");
  }
});

const projects = ["restaurant", "construction", "canvas", "meladora"];
projects.forEach((project) => {
  $("#" + project).on({
    mouseover: function () {
      $("#" + project + " .overlay").css("opacity", "0.8");
      $("#" + project + " .overlay").css("animation", "show 1s");
      $("#" + project + ".work img").css("transform", "scale(1.1)");
    },
    mouseout: function () {
      $("#" + project + " .overlay").css("opacity", "0");
      $("#" + project + " .overlay").css("animation", "hide 1s");
      $("#" + project + ".work img").css("transform", "scale(1)");
    },
  });
});
