const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(cors({ origin: ['http://localhost:3000', "https://peit-react1-delivery-app.vercel.app"] }));
server.use(router);

server.listen(port)