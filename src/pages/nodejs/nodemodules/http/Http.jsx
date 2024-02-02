import { Pre } from "../../../../components/Tags";

const Http = () => {
  return (
    <Pre>{`
const http = require("http");
const moment = require("moment");

http
  .createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
      case "/":
        res.write("hello world");
        res.end();
        break;
      case "/page1":
        page1(res);
        break;
      default:
        errorPage(res);
    }
  })
  .listen(3000, () => console.log("Server running at http://127.0.0.1:3000"));

const page1 = (res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      nama: "ahmad",
      umur: 20,
      waktu: moment(),
    })
  );
  res.end();
};

const errorPage = (res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      nama: "failed",
      umur: "not found",
      waktu: moment(),
    })
  );
  res.end();
};
    `}</Pre>
  );
};

export default Http;
