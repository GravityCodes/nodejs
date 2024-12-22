/*
const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
  
  console.log(req.url);

  switch (req.url) {
    case "/":
      fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
      });
      break;
    case "/about":
      fs.readFile(path.join(__dirname, "about.html"), (err, content) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
      });
      break;
    case "/contact-me":
      fs.readFile(path.join(__dirname, "contact-me.html"), (err, content) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
      });
      break;
    case "/style.css":
      fs.readFile(path.join(__dirname, "style.css"), (err, content) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': "text/css"});
        res.end(content);
      });
      break;
    default :
      fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
        if (err) throw err;
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end(content);
      });
      break;
  };

  //read css file
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

*/


const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(content);
  });
});

app.get("/about", (req, res) => {
  fs.readFile(path.join(__dirname, "about.html"), (err, content) => {
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(content);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile(path.join(__dirname, "contact-me.html"), (err, content) => {
    if (err) throw err;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
  });
});

app.get("/style.css", (req, res) => {
  fs.readFile(path.join(__dirname, "style.css"), (err, content) => {
    if(err) throw err;
    res.writeHead(200, {'Content-Type': "text/css"});
    res.end(content);
  });
});

app.get("*", (req, res) => {
  fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
    if (err) throw err;
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end(content);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App successfully converted to Express App. Listening on port: ${PORT}`));