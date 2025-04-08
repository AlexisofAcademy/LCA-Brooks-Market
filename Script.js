const menuOpenButton=documentquerySelector("menu-open-button");

menuOpenButton.addEventListener("click",() => {
    document.body.classList.toggle("show-mobile-menu");
});

const menuCloseButton=documentquerySelector("#menu-close-button");

menuCloseButton.addEventListener("click",() => menuOpenButton.click);

