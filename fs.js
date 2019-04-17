

// function abc(){
//     let num = 0;
//     for(i=0; i<999; i++){
//         var random = Math.floor(Math.random()* 10)
//         num+= ' ' + random
    
//     }
    
//     return num
// }
// var b = abc()
// console.log(b);

// var fs = require('fs')
// fs.appendFile('./random' , b, (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }

// })



const fs = require('fs')

number = 0;
a = []

for (i = 0; i <= 999; i++) {
    var num = Math.random() * 999;
    v = Math.round(num)
    number+= ' ' + v
    a.push(number)
}
console.log(a)

// fs.appendFile('./RandomNumber', number, (err, res) => {
//     if (err) {
//         console.log(err);
//     }
// })

