const fs = require('fs')

fs.readFile('randomNum', 'utf8', (err, data)=> {
    if(err){
        console.log(err)
    }
    console.log(data)
})