var anoAtual = 2023
const anoNascimento = 1982
let idade = anoAtual - anoNascimento
nome = 'Alexander'
const frase = `Meu nome é ${nome} e minha idade é ${idade}.`
// console.log(frase)

{
    // Bloco 1
    var v1 = 1
    var v2 = 3
    {
        // Bloco 2
        var v1 = 2
        var v2 = 4
        console.log(v1)
        console.log(v2)
    }
    console.log(v1)
    console.log(v2)
}