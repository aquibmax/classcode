// var star = ''

// var i
// for(i=0; i<5; i++){
//     star+='*'
//     console.log(star)
// }


// var i, num, fact = 1;
// var num = 7
//  for(i=1; i<=num; i++){
//      fact = fact * i
//  }
//  console.log(fact)




// var a, num = 1612, rev = 0;

// var aqib = (param)=>{
// while(param>0){
//     a = param%10
//     param = parseInt(param/10)
//     rev = rev * 10 + a
// }
// }
// aqib(num)
// console.log(num)
// console.log(rev)
// if(num === rev){
//     console.log('palindrome')
// }else{
//     console.log('not palindrome')
// }



// decimal to binary
function abc(num){
var b = []
while(num>0){
    var a = (num%16)
    b.push(a)
    var n = num/16
    var num = parseInt(n)
}
return b;
}
console.log(abc(117).reverse().join(''))

// //binary to decimal

// var digit = parseInt(111001, 2);
// console.log(digit)

























