//Q2 NodeJS

// 2. Create a simple HTTP server that runs on port 3000, does simple arithmetic operations, and responds with the result.  
// Some examples...   
// * http://localhost:3000/add?x=12&y=13 returns the string 25
// * http://localhost:3000/multiply?x=12&y=13 returns the string 156
// Your server must support add, subtract, multiply and divide operations. For an unsupported operation/arguments it must return a sensible error message, with appropriate error code (HTTP status code 401 is for a badly constructed request)


const http = require('http'); // npm i http-server\
//const {resolveSoa} = require('dns')
const url = require('url')
const server = http.createServer((req, res) => {
    console.log(req.url)    
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;

    const pathParts = parsedUrl.pathname.split('/').slice(1) // skipping first value
    const num1 = parseInt(queryParams.x);
    const num2 = parseInt(queryParams.y);
    const op = parsedUrl.pathname;
    
    let aaa = 0;    
    if(op==='/add') aaa = num1+num2;
    if(op==='/multiply') aaa = num1*num2;
    
    res.write(`With ${num1} and ${num2} we get ${aaa}\n`)

    res.write(`PathParts : ${pathParts}.\n`)
    
    res.end('end of writiiing')
})

const PORT = 3000; //for local ports port number>1024 is good.

server.listen(PORT, (err) => {

    if(err) {
        return console.log(`Something went wrong ${err.message}.`)
    }
    return console.log(`Server started on http://localhost:${PORT}`)
})

// install cmder
//http://127.0.0.1:3000/a/b/c?num1=3&num2=5

//https://www.google.com/search?q=apple&rlz=1C1SQJL_enIN915IN915&oq=apple&aqs=chrome..69i57j46j35i39l2j0l2j46j0.1621j0j15&sourceid=chrome&ie=UTF-8