/*  Toolbar Button
/*----------------------------------------*/
let miniCart = document.querySelectorAll(".toolbar-btn");
let overlay = document.querySelector(".global-overlay");

miniCart.forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    let id = item.attributes.href.value;
    let target = document.querySelector(id);
    target.classList.toggle("open");
    overlay.classList.add("overlay-open");
  });
});

/*----------------------------------------*/
/*  Close Button Actions
/*----------------------------------------*/
function getParent(parent, className) {
  while (!parent.matches(className)) {
    parent = parent.parentElement;
  }
  return parent;
}

let btnClose = document.querySelectorAll(".btn-close");
btnClose.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    let target = getParent(this, ".open");
    target.classList.remove("open");
    overlay.classList.remove("overlay-open");
  });
});

/*  Offcanvas
/*----------------------------------------*/
/*Variables*/
let offcanvasNav = document.querySelectorAll(".mobile-menu");
let offcanvasNavWrap = document.querySelectorAll(".mobile-menu_wrapper");
let offcanvasNavSubMenu = document.querySelectorAll(".mobile-menu .sub-menu");

function checkClass(item, className) {
  for (x of item) {
    if (x.classList.contains(className)) return x;
  }
}
/*Add Toggle Button With Off Canvas Sub Menu*/
offcanvasNavSubMenu.forEach(item => {
  let parent = item.parentElement;
  let newItem = document.createElement("span");
  newItem.className = "menu-expand";
  newItem.innerHTML = '<i class="ion-ios-plus-empty"></i>';
  parent.appendChild(newItem);
  item.classList.add("hide");
});
/*Category Sub Menu Toggle*/
offcanvasNav.forEach(item => {
  item.addEventListener("click", e => {
    let itemTarget = e.target;
    let itemParent = getParent(itemTarget, ".menu-item-has-children");
    let getSubMenu = checkClass(itemParent.children, "sub-menu");
    itemParent.classList.toggle("active");
    getSubMenu.classList.toggle("toggle-hide");
  });
});
