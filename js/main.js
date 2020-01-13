//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

const selectElements = function (elements) {
    return document.querySelectorAll(elements);
};


let menuToggler = selectElement('.menu-toggle');
let navLinks = selectElements('.nav-link');
let body = selectElement('body');

// 메뉴버튼 클릭 시 hamburger 레이아웃 이동
menuToggler.addEventListener( 'click', function() {
    body.classList.toggle('open');
});

// navigation Link가 클릭되었을 때, hamburger 메뉴 지우기
for(var i = 0; i < navLinks.length; i += 1){
    navLinks[i].addEventListener('click', function () {
        body.classList.remove('open');
    });
}