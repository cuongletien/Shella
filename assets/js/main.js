/*  Toolbar Button
/*----------------------------------------*/
let miniCart = document.querySelectorAll(".toolbar-btn");
let overlay = document.querySelector(".global-overlay");

miniCart.forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var id = item.attributes.href.value;
    var target = document.querySelector(id);
    target.classList.toggle("open");
    overlay.classList.add("overlay-open");
  });
});

/*----------------------------------------*/
/*  Close Button Actions
/*----------------------------------------*/
function getParent(parent) {
  for (let x in parent) {
    parent = parent.parentElement;
    if (parent.matches(".open")) return parent;
  }
}
let btnClose = document.querySelectorAll(".btn-close");
btnClose.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    var target = getParent(this);
    target.classList.remove("open");
    overlay.classList.remove("overlay-open");
  });
});