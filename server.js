const http = require('http');
const PORT = process.env.PORT || 8000;
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  console.log('req.method', req.method);
  console.log('req.headers', req.headers);
  console.log('req.url CONSOLE LOG', req.url);

  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile('./public/index.html', 'utf-8', (err, data) => {
          if(err) {
              fs.readFile('./public/404.html', 'utf-8', (err, data) => {
                  res.writeHead(404, { 'content-type': 'text/html' });
                  res.write(data);
                  res.end();
              })
          } else {
              res.writeHead(200, { 'content-type': 'text/html' });
              res.write(data);
              res.end();
          }
        
      });
    }
    else if (req.url === '/css/styles.css') {
      fs.readFile('./public/css/styles.css', 'utf-8', (err, data) => {
          if(err) {
              fs.readFile('./public/404.html', 'utf-8', (err, data) => {
                  res.writeHead(404, { 'content-type': 'text/html' });
                  res.write(data);
                  res.end();
              })
          } else {
              res.writeHead(200, { 'content-type': 'text/css' });
              res.write(data);
              res.end();
          }
        
      });
    }
    else if (req.url === '/hydrogen.html') {
        fs.readFile('./public/hydrogen.html', 'utf-8', (err, data) => {
            if(err) {
                fs.readFile('./public/404.html', 'utf-8', (err, data) => {
                    res.writeHead(404, { 'content-type': 'text/html' });
                    res.write(data);
                    res.end();
                })
            } else {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write(data);
                res.end();
            }
          
        });
      }
    else if (req.url === '/helium.html') {
        fs.readFile('./public/helium.html', 'utf-8', (err, data) => {
          res.writeHead(200, { 'content-type': 'text/html' });
          res.write(data);
          res.end();
        });
      }
    else if (`./public/${req.url}`) {
    fs.readFile(`./public/${req.url}`, 'utf-8', (err, data) => {
        if (err) {
        fs.readFile('./public/404.html', (err, data) => {
            res.writeHead(404, {'content-type': 'text/html'});
            res.write(data);
            res.end();
        })
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
    }

  }
})

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });





//   const http = require('http');
//   const PORT = process.env.PORT || 8000;
//   const fs = require('fs');
//   const qs = require('querystring');
  
//   const server = http.createServer((req, res) => {
//     console.log('req.method', req.method);
//     console.log('req.headers', req.headers);
//     console.log('req.url', req.url);
//     if (req.method === 'POST') {
//       if (req.url === '/makeme') {
//         let body = [];
//         req
//           .on('data', chunk => {
//             body.push(chunk);
//           })
//           .on('end', chunk => {
//             body = Buffer.concat(body).toString();
//             console.log('body', body);
//             let parsedBody = qs.parse(body);
  
//             const responseBodyContents = `<html>..${parsedBody.status}...`;
  
//             fs.writeFile(
//               `./public/${parsedBody.name}.html`,
//               responseBodyContents,
//               err => {
//                 if (err) {
//                   res.writeHead(500);
//                   res.write('{status: OMFG BROKEN WTH DO AGAIN PLZ}');
//                   res.end();
//                 }
//                 res.writeHead(200);
//                 res.write('{status: ok}');
//                 res.end();
//               }
//             );
//           });
//       }
//     }
  
//     if (req.method === 'GET') {
//       if (req.url === '/') {
//         fs.readFile('./public/index.html', 'utf-8', (err, data) => {
//           res.writeHead(200, { 'content-type': 'text/html' });
//           res.write(data);
//           res.end();
//         });
//       }
//       if (req.url === '/css/styles.css') {
//         fs.readFile('./public/css/styles.css', 'utf-8', (err, data) => {
//           res.writeHead(200, { 'content-type': 'text/css' });
//           res.write(data);
//           res.end();
//         });
//       }
//     }
//   });
  
//   server.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });