const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.status(200).send({ status: 'success' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Webhook rodando na porta ${port}`);
});
