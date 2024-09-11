const express = require('express');
const app = express();
const faltasRoute = require('./routes/faltasRoute');
const ideiaRoute = require('./routes/ideiaRoute');
const feriasRoute = require('./routes/feriasRoute');
const userRoute = require('./routes/userRoute')
const calendarioRoute = require('./routes/calendarioRoute');
const despesasRoute = require('./routes/despesasRoute');
const blogRoute = require('./routes/blogRoute');
const noticiaRoute = require('./routes/noticiaRoute');
const visitaRoute = require('./routes/visitaRoute');
const candidaturasRoute = require('./routes/candidaturasRoute');
const departamentoRoute = require('./routes/departamentoRoute');
const empresaRoute = require('./routes/empresaRoute');
const notificacoesRoute = require('./routes/notificacoesRoute');
const projetosRoute = require('./routes/projetosRoute');
const reembolsosRoute = require('./routes/reembolsosRoute');
const vagaRoute = require('./routes/vagaRoute');
const userVisitanteRoute = require('./routes/userVisitanteRoute');
const cors = require('cors');
const sequelize = require('./models/database');
const bodyParser = require('body-parser');
const path = require('path');
require('./cronJobs');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.set('port', process.env.PORT||8080);
app.use(cors(corsOptions));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());


app.use('/faltas', faltasRoute);
app.use('/ideias', ideiaRoute); 
app.use('/ferias', feriasRoute);
app.use('/user', userRoute);
app.use('/calendario', calendarioRoute);
app.use('/despesas', despesasRoute);
app.use('/blog', blogRoute);
app.use('/noticia', noticiaRoute);
app.use('/visita', visitaRoute);
app.use('/candidaturas', candidaturasRoute);
app.use('/departamento', departamentoRoute);
app.use('/empresa', empresaRoute);
app.use('/notificacoes', notificacoesRoute);
app.use('/projeto', projetosRoute);
app.use('/reembolsos', reembolsosRoute);
app.use('/vaga', vagaRoute);
app.use('/userVisitante', userVisitanteRoute);

sequelize.sync({  alter: true })
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar modelos com o banco de dados:', err);
  });
  

app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'));
})