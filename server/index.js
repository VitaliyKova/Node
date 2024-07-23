const http = require("http");

const PORT = 3000;
const counters = { "/": 0, "/about": 0 };

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    counters["/"]++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `<a href="/about">Страница about</a> Количество посещений: ${counters["/"]}`
    );
  } else if (req.url === "/about") {
    counters["/about"]++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `<a href="/">Страница главная</a> Количество посещений: ${counters["/about"]}`
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<p>404 Not Found</p> <a href="/">Страница главная</a>`);
  }
});

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});