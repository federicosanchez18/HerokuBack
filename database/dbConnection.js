function dbConnection(sequelize){
    //Force: true hace un DROP TABLES
    sequelize.sync({force: false}).then(() =>{
        console.log("Conectado correctamente a la Base de Datos")
      }).catch(error => {
        console.log("Error de conexion", error)
      });
}

export {dbConnection}