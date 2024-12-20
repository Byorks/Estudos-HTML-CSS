
const menu = document.querySelector('#menu');
const iconBars = document.querySelector('#icon-bars');
const iconX = document.querySelector('#icon-x');
const menuButton = document.querySelector('.menu-button')

function abreFechaMenu() {
    if (menu.classList.contains("menu-closed")) {
        menu.classList.remove("menu-closed");

        menuButton.classList.toggle('active');
    
        iconBars.style.display = "none";
        iconX.style.display = "inLine";
    }
    else {
        menu.classList.add("menu-closed");

        menuButton.classList.toggle('active');
        
        iconX.style.display = "none";
        
        iconBars.style.display = "inLine";
    }
}



function menuResponsivo() {
    const mediaQuery = window.matchMedia('(max-width: 1350px)');
    if (mediaQuery.matches) {
        menu.classList.add("menu-closed");
        iconX.style.display = "none";
        iconBars.style.display = "inLine";
    } else {
        if (menu.classList.contains("menu-closed")) {
            menu.classList.remove("menu-closed");
            iconX.style.display = "none";
            iconBars.style.display = "inLine";
        }
    }
}

document.addEventListener( "DOMContentLoaded", () => {
    menuResponsivo();
});

windowt.addEventListener( "resize", () => {
    menuResponsivo();
});