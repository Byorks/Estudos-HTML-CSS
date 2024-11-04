class HeaderOmp extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());
        
        const header = this.createHeader();

        shadow.appendChild(header); 
    }

    createHeader() {
        const header = document.createElement('header');

        header.innerHTML = `
            <div class="container-grid">
                <img src="images/logotipo/logo-header.svg" alt="Logotipo OMP">
                <nav>
                    <a href="index.html">Principal</a>
                    <a href="Adoção img/Adoção.html">Adote</a>
                    <a href="produtos/index.html">Produtos</a>
                    <a href="servicos/servicos.html">Serviços</a>
                </nav>

                <div class="login-icons">
                    <a href=""> 
                        <img src="images/icons/contact-icon.svg" alt="">
                        Contato</a>

                    <a href="">
                        <img src="images/icons/login-icon.svg" alt="">
                        Entrar</a>
                </div>
            </div>
    
        `;

        return header;

    }

    styles() {
        const style = document.createElement('style');

        style.textContent = `
                
        header {
            height: 149px;
            width: 100%;
        
            display: flex;
            align-items: center;
        
            background-color: var(--bege-omp);
        }
        
        
        header nav {
            /* Preciso calcular em porcentagem*/
            width: 539px;
        
            display: flex;
            justify-content: space-between;
            gap: 24px;
        }
        
        header a {
            color: var(--cinza-omp);
        }
        
        header .container-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        header .login-icons {
            width: 25%;
        
            display: flex;
            justify-content: flex-end;
            gap: 24px;
        }
        
        header .login-icons a{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
        }
        
        
        @media screen and (max-width: 1250px){ 
            header {
                background-color: black;
            }
        } 

        `

        return style
    }
}

customElements.define('header-omp', HeaderOmp);