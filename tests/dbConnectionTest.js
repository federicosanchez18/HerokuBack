import {expect,assert} from 'chai';
import {dbConnection} from '../database/dbConnection'
import { sequelize} from '../database/database'

describe('Testeo la conexion a la BBDD', function () {
    before((done) => { 
         var db =   dbConnection(sequelize);
    })

    after((done) => {
        sequelize.close()
    })
    

  })