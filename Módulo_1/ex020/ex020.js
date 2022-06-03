/* function par(n) {
  if (n % 2 == 0) {
    return 'par'
  }else{
      return 'impar'
  }
}
let res=par(313)
console.log(res) */
/* 
function soma(n1=0,n2=0){
    return n1+n2
}
console.log(soma(25)) */

/* 
let f=function(x) {
    return x*2
}
console.log(f(50)) */

/* function fatorial(n) {
    let fat=1
    for(let i=n;i>1;i--){
        fat*=i
    }
    return fat
}
console.log(fatorial(5)) */

function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))