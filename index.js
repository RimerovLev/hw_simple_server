import http from 'http';

const server = http.createServer((req, res) => {
   const url = new URL(req.url, `http://${req.headers.host}`);
   const name = url.searchParams.get('name' || 'User');
   const message = `Hello ${name}`;

    res.writeHead(200, { "Content-Type": "text/plain, charset=utf-8" });
    res.end(message);
})

server.listen(3000, () =>{
    console.log("Server started on port 3000");
});