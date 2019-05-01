

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
arr = []

for (i = 0; i <= 1000; i++) {
    var num = Math.floor(Math.random() * 100);
    arr.push(num.toString())
}
console.log(arr)

fs.appendFile('./randomNum', arr, (err, data) => {
    if (err) {
        console.log(err);
    }
})

