console.log('*****SOMA********')
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2, 5))

console.log('*****DOBRO********')
let v = function(x) {
    return x*2
}

console.log(v(5))

console.log('******FATORIAL*******')

function fatorial(n) {
    let fat =1
    for(let c = n; c> 1; c--) {
        fat *= c
    }
    return fat
}
    console.log(fatorial(5))  //5!

console.log('*******FATORIAL--RECURSIVO******')

function fact(n) {
    if (n == 1) {
        return 1
    } else { 
        return n* fact(n-1)
    }
}
console.log(fact(5)) 

/* 5! = 5 x 4!...
    n x (n-1) */