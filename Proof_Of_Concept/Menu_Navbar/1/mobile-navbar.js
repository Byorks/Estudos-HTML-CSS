class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        // Faz não perdermos a relação com o objeto MobileNavbar
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        // Método que toda vez que clicarmos para abrir o menu, fará uma verificação
        this.navLinks.forEach((link, index) => {
            // link possuí animação?
            link.style.animation
            // tem então ele tira
            ? (link.style.animation = "")
            // se não tem ele adiciona
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.3}s`);
            // o index / 7 + .03 serve para adicionar alguns milissegundos a mais em cada link que vai abrindo dando a sensação de um link aparecendo de cada vez
        });
    }

    handleClick() {
        // Alterna a classe ao clicarmos, entre active e sem active
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
    
}

const mobileNavbar = new MobileNavbar (
    // Inserindo os caminhos que serão alocados no método contrutor
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();