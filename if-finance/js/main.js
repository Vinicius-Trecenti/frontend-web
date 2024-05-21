console.log("Arquivo js externo")

// adicione seu token
const token = 'cp1bhi1r01qu1k1i3j00cp1bhi1r01qu1k1i3j0g'

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


function addCard({ bolsa, codigo, valor, variacao, nAcoes, empresa }) {

    //const { bolsa, codigo, valor, variacao, nAcoes, empresa } = stock

    //document é a estrutura e o query seleciona
    const main = document.querySelector('body > main')
    main.innerHTML = main.innerHTML + `
    <div class="card-tincker" id="${codigo}" onmouseenter="cardEnter(event)" onmouseleave="cardLeave(event)">
            <header>
                <h2><span> ${bolsa}:</span> ${codigo}</h2>
                <h1>${empresa}</h1>
            </header>
            <main>
                <p>R$ ${(+valor / 100).toFixed(2).toString().replace('.', ',')}</p>

                <span ${variacao < 0 ? 'style="background: red;"' : ''}> ${variacao < 0 ? '▼' : '▲'} ${variacao}%</span>
                
                <span>R$ ${realFormat(((+valor / 100) * (variacao / 100)))}</span>

            </main>
            <footer>
                <div>
                    <p>${nAcoes}</p>
                    <span>Ações</span>
                </div>
                <div>
                    <p>R$ ${realFormat(nAcoes * (valor / 100))}</p>
                    <span>Posição</span>
                </div>
            </footer>
            <div class="card-menu">
                <span onclick="openEditModal(event)">Editar</span>
                <span onclick="removeCard(event)">Excluir</span>
            </div>

        </div>`

        const allEdit = main.querySelectorAll('.card-ticker .card-menu span:first-child')
        allEdit.forEach(edit => {
            edit.addEventListener('click', openEditModal)
        })
}

function updateCard({bolsa, codigo, empresa, valor, variacao, nAcoes}){
	//const {bolsa, codigo, empresa, valor, variacao, nAcoes} = stock
    const card = document.querySelector(`#${codigo}`)
    
	card.innerHTML = `
			<header>
				<h2><span>${bolsa}:</span> ${codigo}</h2>
				<h1>${empresa}</h1>
			</header>
			<main>
				<p>${realFormat(+valor / 100)}</p>
				<span ${ variacao < 0 ? 'style="background: #FF0000;"' : ''} >${ variacao < 0 ? '▼' : '▲'} ${variacao}%</span>
				<span>${realFormat(((+valor / 100)*(variacao / 100)))}</span>
			</main>
			<footer>
				<div>
					<p>${nAcoes}</p>
					<span>Ações</span>
				</div>
				<div>
					<p>${realFormat(nAcoes * (+valor / 100))}</p>
					<span>Posição</span>
				</div>
			</footer>
			<div class="card-menu">
				<span onclick="openEditModal(event)" >Editar</span>
				<span onclick="removeCard(event)">Excluir</span>
			</div>
    `

    const edit = card.querySelector('.card-ticker .card-menu span:first-child')
	edit.addEventListener('click', openEditModal)
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

function loadTable() {
    console.log(allStocks.nAcoes)
    allStocks.map(stock => addRows(stock))
}

function addRows(stock) {

    //const {bolsa, codigo, valor, variacao, nAcoes, empresa} = stock

    const tr = document.querySelector('#acoes')
    tr.innerHTML += `
    <tr>
        <td>${stock.bolsa}</td>
        <td>${stock.codigo}</td>
        <td>${stock.empresa}</td>
        <td>R$ ${(+stock.valor / 100).toFixed(2).toString().replace('.', ',')}</td>
        <td><span ${stock.variacao < 0 ? 'style="background: red; border-radius:10px;"' : 'style="background: green; border-radius:10px;"'}> ${stock.variacao < 0 ? '▼' : '▲'} ${stock.variacao}%</span></td>
        <td>${stock.nAcoes}</td>
        <td>R$ ${realFormat(stock.nAcoes * (stock.valor / 100))}</td>
    </tr>`

    //se colocar table no primeiro tr ele pega a tabela ai só colocar as linhas em uma variavel 
    //e adicionar nas tabelas para ficar diferente as linhas
}

const openModal = (idModal) => {
    const modal = document.getElementById(idModal)
    modal.style.display = 'flex'
}

const closeModal = (event, id) => {
    if(id){
		const modal = document.getElementById(id)
		modal.style.display = 'none'
		return
	}

	if(event?.target?.className === "modal"){
		const modal = document.getElementById(event.target.id)
		modal.style.display = 'none'
		return
	}
}

const createCard = (event) => {
    //para o efeito padrao de redirecionar o formulario
    event.preventDefault()

    //const {bolsa, codigo, valor, variacao, nAcoes, empresa} = event.target.elements

    //addCard({
    //    bolsa: bolsa.value,
    //    codigo: codigo.value,
    //    valor: valor.value,
    //    variacao: variacao.value,
    //    nAcoes: nAcoes.value,
    //    empresa: empresa.value
    //})

    const formData = new FormData(event.target)
    const dados = Object.fromEntries(formData)
    addCard(dados)

    //limpar o formulario
    event.target.reset()

    closeModal(null, 'add-card-modal')
}

//async function testeapi() {}
const testeapi = async () => {
    
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    console.log(response)
    const result = await response.json()
    console.log(result[0].text)

    result.map(item => {
        edit.addEventListener('click', openEditModal)
    })
}


const createApiCard = async (event) =>{
	event.preventDefault()
	const {codigo, nAcoes} = event.target.elements

    try {
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${codigo.value}&token=${token}`)
        const result = await response.json()

        const response2 = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${codigo.value}&token=${token}`)
        const profile = await response2.json()

        if(!response.ok || !response2.ok){
            alert("Erro!")
            return
        }

        if(profile?.exchange === undefined || !result?.d === null){
            alert("Erro!")
            return
        }



        const stock = {
            bolsa: profile.exchange.split(' ')[0],
            codigo: codigo.value,
            empresa: profile.name,
            valor: result.c * 100,
            variacao: result.d,
            nAcoes: nAcoes.value
        }
    
        const card = document.getElementById(codigo.value)

        if(card){
            updateCard(stock)
        }
        else{
            addCard(stock)
        }

        
    } catch (error) {
        alert("Erro ao consultar ação!")
        console.log('ERROR:', error)
    }
	event.target.reset()
	closeModal(null, 'add-api-modal')
}

const cardEnter = (event) => {
	const cardMenu = event.target.querySelector('.card-menu')
	cardMenu.style.display = 'flex'
}

const cardLeave = (event) => {
    const cardMenu = event.target.querySelector('.card-menu')
    cardMenu.style.display = "none"
}

const removeCard = (event) => {
    event.target.closest('.card-tincker').remove()
}

const openEditModal = (event) => {
	const card = event.target.closest('.card-tincker')
	console.log(card);

	const inputBolsa = document.getElementById('e-bolsa')
	inputBolsa.value = card.querySelector('header h2 span').innerText.replace(':', '')

	const inputCodigo = document.getElementById('e-codigo')
	inputCodigo.value = card.querySelector('header h2').innerText.split(': ')[1]

	const inputEmpresa = document.getElementById('e-empresa')
	inputEmpresa.value = card.querySelector('header h1').innerText

	const inputValor = document.getElementById('e-valor')
	inputValor.value = card.querySelector('main p').dataset.valor

	const inputVariacao = document.getElementById('e-variacao')
	inputVariacao.value = card.querySelector('main > span').dataset.variacao

	const inputNAcoes = document.getElementById('e-nAcoes')
	inputNAcoes.value = card.querySelector('footer div p').innerText

			
	
	openModal('edit-form-modal')
}