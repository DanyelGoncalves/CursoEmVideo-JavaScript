/** let num = [5,8,4]

console.log(`Nosso vetor é o ${num}`)
num.push(1)
console.log(`Após a adição Nosso vetor é o ${num}`)
num[4] = 6  //posição 3 que na realidade eeh a quarta, recebe 6

console.log(num)

num.sort() 
console.log(`O vetor tem ${num.length}  e a ordem crescente é ${num} e o primeiro valor é ${num[0]}`)

for (let pos = 0; pos<num.length; pos++) {   //vetor na tela
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num ) {    // para cada posicao em num SIMPLIFICANDO
    console.log(`As posição ${pos} é ${num[pos]}`)

    } **/

    let num = [5, 8, 2, 9 ,3]
   
    num.push(1)
    num.sort()
    console.log(num)
    console.log(`O vetor tem ${num.length} posições`)
    
    
    let pos = num.indexOf(4)
    if (pos == -1) {
        console.log('Valor não foi encontrado')
    } else {
    console.log(`O valor ${num}, esta na posição ${pos}`) }