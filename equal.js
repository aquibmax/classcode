var fs = require('fs')

fs.readFile('./randomNum', 'utf8', (err, data)=> {
    if(err){
        console.log(err)
    }else{
      runner = data.split(',')
      console.log(runner)
    for(i=0; i<20; i++){
        count = 0
        for(j=0; j<1000; j++){
            if(runner[i] == runner[j]){
                count++
            }
        }
        // console.log(count)
        console.log('Number=' + runner[i] + ' ' + ' ' + 'Count=' + count)
    }
}
    
})


// const a = [2,3,4,5,3,5,4,6,8,7,9]

// for(i=0; i<a.length; i++){
//     count = 0
//     for(j=0; j<a.length; j++){
//         if(a[i] == a[j]){
//         count++
//     }
// }

//   console.log('number = '+ a[i] +'--- ' + count + 'times');
  
// }