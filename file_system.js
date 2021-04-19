const fs = require('fs')
//write to a file
fs.writeFile('post.json', JSON.stringify(['I am a content']), (err)=> {
    if(err) throw err
})
/*
//Read from a file
fs.readFile('post.json', 'utf8', (err, content) => {
    if(err) throw err
    console.log(content)
})
//Append to an existing file
fs.appendFile('post.json', JSON.stringify(['I am a second content']), (err) => {
    if (err) throw err
})
*/
fs.readFile('post.json', 'utf8', (err, content) => {
    if(err) throw err

    let data = JSON.parse(content)

    data.push("I am a second content")

    fs.writeFile('post.json', JSON.stringify(data), (err) => {
        if(err) throw err
    })
})
