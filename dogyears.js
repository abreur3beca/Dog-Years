//atividade 1
//essa variável armazena a minha idade em anos humanos.
let myAge = 16;

//atividade 2
//esses são os dois primeiros anos da vida de um cão, que contam mais do que os anos subsequentes.
let earlyYears = 2;

//atividade 3
//a quantidade de "anos de cão" que cada um dos dois primeiros anos humanos representa.
earlyYears *= 10.5;
console.log(earlyYears);

//atividade 4
//a quantidade de "anos de cão" que cada um dos dois primeiros anos humanos representa.
let lateYears = myAge -= 2;
console.log(myAge);

//atividade 5
//a quantidade de "anos de cão" que cada ano humano adicional representa.
lateYears *= 4;
console.log(lateYears);

//Atividade 7
//Representa minha idade em anos cão.
let myAgeinDogyears = earlyYears + lateYears;

//Atividade 8
//(essa linha de código está transformando meu nome em letra minúsculas.
let myName = "Rebeca".toLowerCase()
console.log(myName)

//atividade 9
//estou imprimindo meu nome com as inpulações de string.
console.log(`Meu nome é ${myName}. Tenho ${myAge} anos em anos humanos,
que são ${myAgeinDogyears} anos em anos de cão.`)