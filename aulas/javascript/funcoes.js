// funções são blocos de codico que podem selfeaproveitados ao longo
// da execução do progama caracteristicas:
//    > podem ser nomeados ou não
//    >poder receber parametros ou não
//    >podem retornar valores ou não


function dizOla(){
    alert ("Diz olá!")

function dizOlaPessoa(nome){
    alert(`não seja timido(a) ${nome}.fala oi!`)


}
const jogadores = ['neymar','ronaldinho', 'messi']
const frutas = ['banana', 'morango','uva']

function formatatexto(lista){
    for(let texto of lista){
        console.log (texto.toUpperCase())
        //texto.toLowerCase()>tudo para minusculo
        //texto.trim()>elimina espaços em brancos
        //texto.join(' outra coisa ')> com outro
    }
}
formatatexto(jogadores)

function adicao(n1, n2){
    return n1+ n2
}
//faça uma versão para subtracao, multiplicacao,divisao

const resultadoAdicao = adicao(5,25) + 90
console.log(`Adição: ${resultadoAdiacao}`) //valor 30



//invocar ou chamar a função
// dizOla()
// dizOlapessoa("luana")
// dizOlapessoa("vitoria")
// dizOlapessoa("taynara")



}