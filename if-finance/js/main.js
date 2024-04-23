console.log("Arquivo js externo")

function addCard(){
    //document é a estrutura e o query seleciona
    const main = document.querySelector('body > main')
    main.innerHTML = main.innerHTML + 
    `
    <div class="card-tincker">
            <header>
                <h2><span> NASDAQ:</span> APPL</h2>
                <h1>Aplle inc</h1>
            </header>
            <main>
                <p>R$ 1.350</p>
                <span>▲ 0,15%</span>
                <span>R$ 0,80</span>
            </main>
            <footer>
                <div>
                    <p>50</p>
                    <span>Ações</span>
                </div>
                <div>
                    <p>R$ 1.000</p>
                    <span>Posição</span>
                </div>
            </footer>
        </div>
        `
}