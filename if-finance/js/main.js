console.log("arquivo js externo")

//LET PARA QUE VAI SER ALTERADO
//CONST PARA QUE NAO VAI SER ALTERADO E FICA ALI
//VAR????

//LET TEM UMA SEGURANÇA A MAIS - NAO DEIXA MAIS DE UM VARIAVEL POR BLOCO
//O VAR PERMITE CRIAR ELA NOVAMENTE 

//VAR PERMITE VOCE CRIAR E MUDAR O VALOR DA VARIAVEL MAS PERMITE REECRIAR NA MESMA PARTE DO CODIGO
//LET NAO VAI PERMITIR A MESMA VARIAVEL MAS PERMITE OUTROS VALORES
//VAR CRIA UMA VARIAVEL PERMITE RECRIAR UMA MESMA VARIAVAVEL NO BLOCO [ESCOPO GLOBAL]

/*
let var1 = 10
var1 = 'Renan'

const var2 = 20
const var3 = var2 + 10

//var2 = 'Cavichi'

console.log(var3)

//STRINGS 'VINICIUS', "VINICIUS", ´VINICIUS´
//PARA CONCATENAR  
//let nome = 'vinicius' + ' trecenti'

let nome = 'vinicius'
let nome_completo = `${nome} Trecenti`
var2 = 10               //INT
var2 = 34.5             //FLOAT
var2 = true             //BOOL
var2 = [12, 14, 15, 16] //arrayzinho
var2 = {name: 'vinicius', idade:20} //OBJECT 
console.log(nome_completo)


//DECISÕESSSSS
if(nome == "vinicius"){

} else if(nome == 'trecenti'){

}

//CONDIÇÃO TERNARIA
const nomeCompleto = true
const meuNome = nomeCompleto ? 'Vinicius Trecenti' : 'Vinicius'


//LAÇOSSSS
for(let i = 0; i<10; i++){

}

//É VERDADE POR QUE ELE TENTA TRANSFORMAR E COMPARAR
//PARA SER FALSO É PRECISO COLCOCAR ===
const valor1 = 10
const valor2 = '10'

if(valor1 === valor2){

}

//funções
function soma(valor1, valor2){
    return valor1+valor2
}

//arrow function
const soma = (valor1, valor2) => {
    return valor1+valor2
} 

//function anonima
//nao tem nome porq é para uma variavel
const soma = function () {

}



*/
//OBJETOS - Conjunto de variaveis agrupadas
// as variavaeis podem gravar qualquer tipo de dado
// inclusive um outro objeto
const user = {
    nome: 'Vinicius',
    idade: 20,
    email: 'vini@gmail.com',
    endereco: {
        rua: 'Av. Bahia',
        numero: 456, 
        bairro: 'Indaia'
    }, 
    soma: (valor1, valor2) => {return valor1+valor2},
    console: ['PS5', 'Switch', {teste: 10, valor:50}],
    nome: 'Vinicius' //quem tiver por baixo é sobrescrito
}

//navegando por ponto e por propriedade
console.log(user.email)
console.log(user.endereco.bairro)
console.log(user.soma(10+20))
console.log(user.console[1]) //switch
console.log(user.console[2].valor)

const mostrar = 'idade' //para acessar a propriedade do objeto
console.log(user[mostrar])

//alterando
user.email = 'viniteste@gmail.com'
console.log(user.email)

//adicionando atributo
user.nomeMae = 'Maria'
console.log(user)

//REMOVENDO
delete user.idade
console.log(user.idade)

//OPERADOR DE ESPALHAMENTO
const newUser = {
    ...user, //aqui ele fala spread (ESPALHA)
    //modemos acessar individualmente mas precisamos criar
    //email: user.email
    endereco: {
        ...user.email,
        rua: 'Av. Mato Grosso',
    }
} //criando um obejto pegando todos os dados que estao dentro de user
console.log(newUser)