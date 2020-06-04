// importação do express
const express = require('express');

// importação do mongoose
const mongoose = require('mongoose');

// importação do cors
const cors = require('cors');

// importação de routes
const routes = require('./routes');

// criação da aplicação
const app = express();

mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-le1u3.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

// faz com que o express entenda requisições no formato JSON
app.use(express.json());
app.use(routes);

// principais métodos HTTP: get, post, put, delete

// parâmetros do express:
// query params: request.query (filtros, ordenação, paginação)
// route params: request.params (identificar recurso na alteração ou na remoção)
// body: request.body (dados para criação ou alteração de um registro)

// mongoDB (não-relacional)

// porta do localhost:
app.listen(2222);