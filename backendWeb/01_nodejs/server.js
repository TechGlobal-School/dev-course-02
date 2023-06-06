// node imports changed
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

/** -- Simple node server -- **/
const http = require("http");

const PORT = 8080; // 8000, 5000

// Create a server
const server = http.createServer((request, response) => {
  // send simple text
  //   response.writeHead(200, { "Content-Type": "plain/text" });
  //   response.end("This text coming from node server");

  // send json
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(
  //     JSON.stringify({ message: "This text coming from node server" })
  //   );

  // send html
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>This text coming from node server</h1>");
  //   const htmlPath = path.resolve(process.cwd() + "/index.html");
  // send html file to client
  //   html = fs.readFile(htmlPath); // but return html rather than console.log
  //   response.end(html);
});

server.listen(PORT, () => console.log(`Node server is listening on ${PORT}`));

// TO TEST ==>
// On terminal
// hit: curl http://localhost:8080
// On Browser
// visit: http://localhost:8080
