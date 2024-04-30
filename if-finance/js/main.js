console.log("Arquivo js externo")

const allStocks = [
    {
        bolsa: 'NASDAQ',
        codigo: 'AAPL',
        empresa: 'Apple Inc',
        valor: 25080,
        variacao: 0.35,
        nAcoes: 80
    },
    {
        bolsa: 'NASDAQ',
        codigo: 'MSFT',
        empresa: 'Microsoft Corp',
        valor: 51090,
        variacao: -1.35,
        nAcoes: 40
    },
    {
        bolsa: 'NASDAQ',
        codigo: 'META',
        empresa: 'Meta Plant Inc',
        valor: 43262,
        variacao: 2.3,
        nAcoes: 5
    }
]


function addCard(stock) {
    //document é a estrutura e o query seleciona
    const main = document.querySelector('body > main')
    main.innerHTML = main.innerHTML + `
    <div class="card-tincker">
            <header>
                <h2><span> ${stock.bolsa}:</span> ${stock.codigo}</h2>
                <h1>${stock.empresa}</h1>
            </header>
            <main>
                <p>R$ ${(+stock.valor / 100).toFixed(2).toString().replace('.', ',')}</p>

                <span ${stock.variacao < 0 ? 'style="background: red;"' : ''}> ${stock.variacao < 0 ? '▼' : '▲'} ${stock.variacao}%</span>
                
                <span>R$ ${realFormat(((+stock.valor / 100) * (stock.variacao / 100)))}</span>

            </main>
            <footer>
                <div>
                    <p>${stock.nAcoes}</p>
                    <span>Ações</span>
                </div>
                <div>
                    <p>R$ ${realFormat(stock.nAcoes * (stock.valor / 100))}</p>
                    <span>Posição</span>
                </div>
            </footer>
        </div>`
}

function realFormat(valor) {
    return valor.toFixed(2).toString().replace('.', ',')
}

function loadCards() {
    //for(let i=0; i < allStocks.length(); i++){
    //    addCard(allStocks[i])
    //}

    //allStocks.map((stock) => {
    //    addCard(stock)
    //})

    allStocks.map(stock => addCard(stock))

    //allStocks.map((stock, index) => addCard(stock), console.log(index))

    //allStocks.forEach(stock => addCard(stock))
}

//const showStock = (stock) => {
//    addCard(stock)
//}

//const showStock2 = stock => addCard(stock)

function loadTable(){
    console.log(allStocks.nAcoes)
    allStocks.map(stock => addRows(stock))
}

function addRows(stock) {
    const tr = document.querySelector('#acoes')
    tr.innerHTML = tr.innerHTML + `
    <tr>
        <td>${stock.bolsa}</td>
        <td>${stock.codigo}</td>
        <td>${stock.empresa}</td>
        <td>R$ ${(+stock.valor / 100).toFixed(2).toString().replace('.', ',')}</td>
        <td><span ${stock.variacao < 0 ? 'style="background: red; border-radius:10px;"' : 'style="background: green; border-radius:10px;"'}> ${stock.variacao < 0 ? '▼' : '▲'} ${stock.variacao}%</span></td>
        <td>${stock.nAcoes}</td>
        <td>R$ ${realFormat(stock.nAcoes * (stock.valor / 100))}</td>
    </tr>`
}