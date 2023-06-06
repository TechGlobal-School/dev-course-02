const path = require("node:path");
const fs = require("node:fs/promises");
const process = require("process");

// fs.readFile and eror handling
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

console.log(path.basename("./file.txt"));
console.log(process.cwd());
console.log(path.resolve(process.cwd() + "/file.txt"));
const filePath = path.resolve(process.cwd() + "/file.txt");

readFile(filePath);

// node imports changed
// ex: from 'http' to 'node:path'

/** Simple node server **/

// create a server

// host, port, http

const http = require("http");

const PORT = 8080; // 8000, 5000

const server = http.createServer((request, response) => {
  // simple text
  //   response.writeHead(200, { "Content-Type": "plain/text" });
  //   response.end("This text coming from node server");

  // json
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(
  //     JSON.stringify({ message: "This text coming from node server" })
  //   );

  // html
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>This text coming from node server</h1>");
  //   const htmlPath = path.resolve(process.cwd() + "/index.html");
  // send html file to client
  //   html = fs.readFile(htmlPath); // but return html rather than console.log
  //   response.end(html);
});

server.listen(PORT, () => console.log(`Node server is listening on ${PORT}`));

// On terminal
// hit: curl http://localhost:8080
