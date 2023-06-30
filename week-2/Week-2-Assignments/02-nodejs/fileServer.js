/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.get('/files', (req, res) => {
  const filePath = path.join(__dirname + '/files');

  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.error("Error reading directory: ", err);
      return;
    }
    let arrFileName = JSON.stringify(files);
    res.status(200).send(arrFileName);
  })
})

app.get('/files/:filename', (req, res) => {
  // console.log(req.params);
  let filename = req.params.filename;
  const filePath = path.join(__dirname + '/files/');
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.error("Error reading directory: ", err);
      return;
    }
    files.forEach(file => {
      if (filename == file) {

        fs.readFile("" + filePath + file, { encoding: 'utf-8' }, function (err, data) {
          if (!err) {
            console.log('received data: ' + data);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
          } else {
            console.log(err);
          }
        });
      }
    });
  })
})

app.get("/", (req, res) => {
  const filePath = path.join(__dirname + '/files/');
  res.status(200).send(filePath);
})

app.listen(port, (req, res) => {
  console.log(`listining on ${port} follow http://localhost:3000/`);
})

// module.exports = app;
