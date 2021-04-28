// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuPic = document.querySelector('.menu-pic');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPic.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPic.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

// Change project thumbnails on hover
const frontendImage = document.getElementById("frontend").getElementsByTagName("img")[0];
const images = ["../images/gepetto.png", "../images/gmusic.png", "../images/getaway.png", "../images/business.png", "../images/glabws.png"];

const coronaImage = document.getElementById("corona").getElementsByTagName("img")[0];
const coronaPics = ["../images/coronaRolling.png", "../images/coronaTable.png", "../images/coronaComp.png"];


var timer;
var i = 1;

const change = () => {
    frontendImage.src = images[i];
    if (++i >= images.length) {
        i = 0
    }
    timer= setTimeout(change, 1200);
};

frontendImage.onmouseover = () => {
    change();
};

frontendImage.onmouseout = () => {
    frontendImage.src = "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    clearTimeout(timer);
};

// Corona
var k = 1;
const chuck = function () {
    coronaImage.src = coronaPics[k];
    if (++k >= coronaPics.length) {
        k = 0
    }
    timer= setTimeout(chuck, 1200);
};

coronaImage.onmouseover = () => {
    chuck();
};

coronaImage.onmouseout = () => {
    coronaImage.src = "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    clearTimeout(timer);
};

