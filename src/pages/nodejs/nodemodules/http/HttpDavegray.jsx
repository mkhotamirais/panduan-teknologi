import { Pre } from "../../../../components/Tags";

const HttpDavegray = () => {
  return (
    <Pre>{`
const { logEvents } = require("./logEvents");
const EventEmitter = require("node:events");
const http = require("http");
const fs = require("fs");
const path = require("path");

const eventEmitter = new EventEmitter();
eventEmitter.on("log", (message, fileName) => {
  logEvents(message, fileName);
});

const PORT = process.env.PORT || 3000;

const serveFile = (filePath, contentType, response) => {
  try {
    const rawData = fs.readFileSync(filePath, !contentType.includes("image") ? "utf8" : "");
    const data = contentType === "application/json" ? JSON.parse(rawData) : rawData;
    response.writeHead(filePath.includes("404.html") ? 404 : 200, { "Content-Type": contentType });
    response.end(contentType === "application/json" ? JSON.stringify(data) : data);
  } catch (error) {
    console.log(error);
    eventEmitter.emit("log", error.name + " : " + error.message, "errLog.txt");
    response.statusCode = 500;
    response.end();
  }
};

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  eventEmitter.emit("log", req.url + "\t" +req.method, "reqLog.txt");

  // comment 1
  // let filePath;
  // if (req.url === "/" || req.url === "index.html") {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   filePath = path.join(__dirname, "views", "index.html");
  //   fs.readFile(path, "utf-8", (err, data) => {
  //     res.end(data);
  //   });
  // }

  const extension = path.extname(req.url);
  let contentType;
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "text/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }

  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);

  if (!extension && req.url.slice(-1) !== "/") filePath += ".html";

  const fileExists = fs.existsSync(filePath);
  if (fileExists) {
    serveFile(filePath, contentType, res);
  } else {
    switch (path.parse(filePath).base) {
      case "old-page.html":
        res.writeHead(301, { Location: "/new-page.html" });
        res.end();
        break;
      case "www-page.html":
        res.writeHead(301, { Location: "/" });
        res.end();
        break;
      default:
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
  }
});

server.listen(PORT, () => console.log("Server running on port " + PORT));
    `}</Pre>
  );
};

export default HttpDavegray;
