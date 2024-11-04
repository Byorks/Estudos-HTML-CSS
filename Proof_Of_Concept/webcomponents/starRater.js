// Criando classe para criação de objetos tipo StarRater
// extends é para trazer propriedades como o AddEventSlistenr, ele está herdando propriedades e funções
class StarRater extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        // Criando Shadow DOM que se chama shadow
        // attachShadow cria a Shadow Dom e ela está no modo aberto, em outras palavras,
        // pode receber alterações do "mundo exterior" que seria a ramificação original DOM
        const shadow = this.attachShadow({mode: 'open' });
        // Adicionando um filho que foi criado no 'style'
        shadow.appendChild(this.styles());

        // Passando o conteúdo da função para uma variável
        const rater = this.createRater();

        // Passando o conteúdo da função para uma variável
        // this sendo utilizado para compartilhar variável entre classes
        this.stars = this.createStars();

        // Cada estrela está sendo inserida no webcomponent criado o rater
        this.stars.forEach(star => rater.appendChild(star));

        this.resetRating();

        shadow.appendChild(rater);
    }

    createRater() {
        // Criando element div
        const rater = document.createElement('div');
        // adicionando a classe star-rater ao elemento recem criado
        rater.classList.add('star-rater');
        rater.addEventListener('mouseout', this.resetRating.bind(this))
        return rater;
    }
    
    createStars() {
        // primeiro paramêtro seria o que tem dentro, estamos criando arrays sem conteúdo, por isso o underline
        // o segundo é o index
        const createStar = (_, id) => {
            const star = document.createElement('span');
            star.classList.add('star');

            // Ao criar cada elemento vamos colocar o valor dele como o id, mas já que o
            // array começa com 0 colocamos mais um e a contagem fica 1 2 3 4 5
            star.setAttribute('data-value', Number(id) + 1);

            star.innerHTML = '&#9733';
            
            // Adicionando funcionalidades
            // Ao clicar, mudamos o valor do rating
            star.addEventListener('click', this.setRating.bind(this));
            star.addEventListener('mouseover', this.ratingHover.bind(this));

            return star;
        }  

        // Pesquisar Array.from
        // O primeiro é um ArrayLike com o número de vezes que vai repetir, no caso criar as estrelas 
        return Array.from({ length: 5}, createStar)
    }

    resetRating() {
        this.currentRatingValue = this.getAttribute('data-rating') || 0;
        this.highlightRating();
    }

    setRating(event) {
        // Adicionando evento que ao clicar alteramos o data-value para o valor atual da star clicada
        this.setAttribute('data-rating', event.currentTarget.getAttribute('data-value'))
    }

    ratingHover(event) {
        // Guardando o valor que o cursor esta sobrepondo(hover)
        this.currentRatingValue = event.currentTarget.getAttribute('data-value');
        this.highlightRating();
    }

    highlightRating() {

        this.stars.forEach( star => {
            // Hehe montei essa parte :D
            // if( star.getAttribute('data-value') <= this.currentRatingValue ){
            //     star.style = 'color: yellow;';
            // }
            // else {
            //     star.style = 'color: gray;'
            // }

            // Versão Maik(Instrutor)
            star.style.color = 
            this.currentRatingValue >= star.getAttribute('data-value')
            ? 'yellow'
            : 'gray'

        })
    }

    styles() {
        // Criando um elemento tipo style e colocando na var style
        const style = document.createElement('style')
        // Inserindo o conteúdo da variável
        style.textContent = `
        .star {
            font-size: 5rem;
            color: gray;
            cursor: pointer;
        }
        `
        //retornando do método para puxar lá em cima
        return style;
    }
}

// Primeiro paramêtro vai ser o nome do elemento HTML, ele precisa ser separado por traços
//não poderia ser star, por exemplo.
// O constructor é executado por causa do código abaixo
customElements.define('star-rater', StarRater)