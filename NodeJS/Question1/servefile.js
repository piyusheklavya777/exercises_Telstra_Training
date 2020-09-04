
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
       
    const parsedUrl = url.parse(req.url, true);

    //res.write(__dirname);

    switch(parsedUrl.pathname) {
        case '/contact' : 
            const contactPath = path.join(__dirname, 'htmlFOLDER','contact.html' )
            fs.readFile(contactPath, 'utf8', (err, contents) => {
                if(err) {
                    res.statusCode = 500;
                    return res.end(err.message);
                }
                res.setHeader('Content-Type', 'text/html');
                res.end(contents)
            });
            break;

        case '/blog' : 
            servefileFN('blog.html')
        break;

        default : 
        const indexPath = path.join(__dirname, 'htmlFOLDER','index.html' )
        fs.readFile(indexPath, 'utf8', (err, contents) => {
            if(err) {
                res.statusCode = 500;
                return res.end(err.message);
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(contents)
        });
        break;

    }    
    //URL encoded format
    //curl -X -d "name=Liril&price=960" 
})

function servefileFN(filename) {

    const appendedPath = path.join(__dirname, 'htmlFOLDER',filename )
        fs.readFile(appendedPath, 'utf8', (err, contents) => {
            if(err) {
                res.statusCode = 500;
                return res.end(err.message);
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(contents)
        });

    return;
}

const PORT = 3000; 

server.listen(PORT, (err) => {

    if(err) {
        return console.log(`Something went wrong ${err.message}.`)
    }
    return console.log(`Server started on http://localhost:${PORT}`)
})

