import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import sequelize from './database/database';
import {seteoRutas} from './routes/routes';
import { dbConnection } from './database/dbConnection';
import { transporter } from './controllers/MailController';

//Creacion de app
const app = express();

// Middleware para Vue.js router modo history
//const history = require('connect-history-api-fallback');
//app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Seteo rutas
seteoRutas(app);

app.set('puerto', process.env.PORT || 1337);
app.listen(app.get('puerto'), () => {
    console.log(' listening on port '+ app.get('puerto'));
    //Conectado a la BD
    dbConnection(sequelize);
    //SMTP 
    transporter.verify()
    
})
