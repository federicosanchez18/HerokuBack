const Clientes_Fiscales = require('../models/Clientes_FiscalesModel');


function findAll() {
    var promise = Clientes_Fiscales.findAll()
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Clientes_Fiscales.create({
        Cliente_Fiscal_Codigo: req.body.Cliente_Fiscal_Codigo,
        Cliente_Fiscal_Descripcion: req.body.Cliente_Fiscal_Descripcion,
        Cliente_Fiscal_Cliente: req.body.Cliente_Fiscal_Cliente,
        Cliente_Fiscal_Tipo_ID_Fiscal: req.body.Cliente_Fiscal_Tipo_ID_Fiscal,
        Cliente_Fiscal_Identificador_Fiscal: req.body.Cliente_Fiscal_Identificador_Fiscal,
        Cliente_Fiscal_IIBB: req.body.Cliente_Fiscal_IIBB,
        Cliente_Fiscal_Direccion: req.body.Cliente_Fiscal_Direccion,
        Cliente_Fiscal_Telefono: req.body.Cliente_Fiscal_Telefono,
        Cliente_Fiscal_Giro_Negocio: req.body.Cliente_Fiscal_Giro_Negocio,
        Cliente_Fiscal_Mail_Para: req.body.Cliente_Fiscal_Mail_Para,
        Cliente_Fiscal_Mail_Copia: req.body.Cliente_Fiscal_Mail_Copia,
        Cliente_Fiscal_Direccion_Factura: req.body.Cliente_Fiscal_Direccion_Factura,
        Cliente_Fiscal_Mail_Pagos: req.body.Cliente_Fiscal_Mail_Pagos,
        Cliente_Fiscal_Telefono_Pagos: req.body.Cliente_Fiscal_Telefono_Pagos,
        Cliente_Fiscal_Predeterminado: req.body.Cliente_Fiscal_Predeterminado,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Clientes_Fiscales.findOne({where: {Cliente_Fiscal_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Clientes_Fiscales.update({
        Cliente_Fiscal_Codigo: req.body.Cliente_Fiscal_Codigo,
        Cliente_Fiscal_Descripcion: req.body.Cliente_Fiscal_Descripcion,
        Cliente_Fiscal_Cliente: req.body.Cliente_Fiscal_Cliente,
        Cliente_Fiscal_Tipo_ID_Fiscal: req.body.Cliente_Fiscal_Tipo_ID_Fiscal,
        Cliente_Fiscal_Identificador_Fiscal: req.body.Cliente_Fiscal_Identificador_Fiscal,
        Cliente_Fiscal_IIBB: req.body.Cliente_Fiscal_IIBB,
        Cliente_Fiscal_Direccion: req.body.Cliente_Fiscal_Direccion,
        Cliente_Fiscal_Telefono: req.body.Cliente_Fiscal_Telefono,
        Cliente_Fiscal_Giro_Negocio: req.body.Cliente_Fiscal_Giro_Negocio,
        Cliente_Fiscal_Mail_Para: req.body.Cliente_Fiscal_Mail_Para,
        Cliente_Fiscal_Mail_Copia: req.body.Cliente_Fiscal_Mail_Copia,
        Cliente_Fiscal_Direccion_Factura: req.body.Cliente_Fiscal_Direccion_Factura,
        Cliente_Fiscal_Mail_Pagos: req.body.Cliente_Fiscal_Mail_Pagos,
        Cliente_Fiscal_Telefono_Pagos: req.body.Cliente_Fiscal_Telefono_Pagos,
        Cliente_Fiscal_Predeterminado: req.body.Cliente_Fiscal_Predeterminado,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    }, {
        where: {
            Cliente_Fiscal_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Clientes_Fiscales.destroy({
        where: {
            Cliente_Fiscal_Codigo: codigo
        }
    })
    return promise
};

export {findAll,find,create,destroy,update};