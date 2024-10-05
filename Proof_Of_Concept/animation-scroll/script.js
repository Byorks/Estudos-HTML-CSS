let sections = document.querySelectorAll('section');

// Essa função vai fazer a classe "show-animate" ficar na section que o mouse estiver presente
// Portanto, caso voltemos para o top, a animação vai rodar novamente
window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        // 150 - para ativar um pouco antes de chegar ao meio da página
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
 
        if (top >= offset && top < offset + height ) {
            sec.classList.add('show-animate');
        }
        // If want to use repeating animationg on scroll, use this
        else {
            sec.classList.remove('show-animate');
        }
    })
}