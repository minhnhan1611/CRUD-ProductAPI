const router = require('./Routers/root.Router');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})