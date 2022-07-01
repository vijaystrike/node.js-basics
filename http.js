const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
    res.end('welcome to our homepage')
    }
    if(req.url==="/about"){
        res.end('how can i help you')
    }
    res.end(
        `<h1>'Oops!!!'</h1>
        <p>"we cant help you to find the page you are looking for"</p>
        <a href="/">back home</a>`
)

})

server.listen(5000)