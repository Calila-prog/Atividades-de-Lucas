const arr = {1,2,3,4,5,6,9}
/*
const newArr = arr.map(function(item){
    return item * 2;
})

cont soma = arr.reduce(function(total,next){
    return total + next;
})

const newArr = arr.map(item=>item + 2)

console.log(newArr)
*/
const usuario1 ={
    nome: "lucas",
    idade: 38,
    empresa:"uesb"
    endereco:{
        rua:"rua e",
        cidade: "jequiw"
    }
}
/*
const{ nome, idade endereco:{cidade}} = usuario;
console.log(idade)
console.log(cidade)
console.log(nome)
*/
const usuario2 = {...usuario1, nome:"Manoel"}
console.log(usuario2)

const idade = 38
const nome = "Lucas"

console.log('Meu nome é:'+nome+'minha idade é:'+idade+'anos')
console.log('Meu nome é:'${nome}'minha idade é:' ${idade}'anos')