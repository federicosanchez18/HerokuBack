const Clientes = require('../models/ClientesModel');
import Regiones from '../models/RegionesModel';
import Industrias from '../models/IndustriasModel';
import ClientesFiscales from '../models/Clientes_FiscalesModel';
import Monedas from '../models/MonedasModel';
import Proyectos from '../models/ProyectosModel';
import Proyectos_Tipos from '../models/Proyectos_TiposModel';
import Usuarios from '../models/UsuariosModel';
import Proyectos_Tecnologias from '../models/Proyectos_TecnologiasModel';
import Tecnologias from '../models/TecnologiasModel';
import Empresas from '../models/EmpresasModel';
import Proyectos_Alcances from '../models/Proyectos_AlcancesModel';

async function findAll() {
    var promise = await Clientes.findAll({
        include : [
            {
            raw: true,
            model: Regiones,
            attributes:['Region_Descripcion'],
            as: 'Region'},
            {model: Industrias,
            attributes:['Industria_Descripcion'],
            as: 'Industria'},
            {model: Empresas,
            attributes:['Empresa_Descripcion'],
            as: 'Empresa'},
            {model: Monedas,
            attributes:['Moneda_Descripcion'],
            as: 'Moneda'
            },
            {model: ClientesFiscales,
            as: 'ClientesFiscales',
            },
            {model: Proyectos,
            as: 'Proyectos',
            include: [
                {model: Proyectos_Alcances,
                attributes:['Proyecto_Alcance_Descripcion'],
                as:'Alcance'},
                {model: Proyectos_Tipos,
                attributes:['Proyecto_Tipo_Descripcion','Proyecto_Tipo_Grupo',
                'Proyecto_Tipo_Beneficio'],
                as:'Tipo'},
                {model: Usuarios,
                attributes:['Usuario_Nombre_Completo'],
                as:'Responsable'},
                {model: Usuarios,
                attributes:['Usuario_Nombre_Completo'],
                as:'Vendedor'},
                {model: Proyectos_Tecnologias,
                as: 'Tecnologias',
                include:[
                    {model:Tecnologias,
                    attributes:['Tecnologia_Descripcion'],
                    as:'Tecnologia'}
                ]}
            ]
            }],
    })
    return promise
};

async function findAllByDescription() {
    var promise = await Clientes.findAll({
        attributes: ['Cliente_Descripcion','Cliente_Key']
    })
    return promise
};

function create(req) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Clientes.create({
        Cliente_Codigo: req.body.Cliente_Codigo,
        Cliente_Descripcion: req.body.Cliente_Descripcion,
        Cliente_Region: req.body.Cliente_Region,
        Cliente_Industria: req.body.Cliente_Industria,
        Cliente_Empresa: req.body.Cliente_Empresa,
        Cliente_Moneda_Principal: req.body.Cliente_Moneda_Principal,
        Cliente_Logo: req.body.Cliente_Logo,
        Cliente_Observacion: req.body.Cliente_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Creacion: normalizedDate,
        Fecha_Modificacion: normalizedDate,
        Visible: 'X'
    })
    return promise
};

function find(codigo) {
    var promise = Clientes.findOne({
        include : [
            {model: ClientesFiscales,
            attributes:['Cliente_Fiscal_Descripcion'],
            as: 'ClientesFiscales'},
            {model: Proyectos,
            attributes:['Proyecto_Descripcion'],
            as: 'Proyectos'}],
        where: {Cliente_Codigo: codigo}})
    return promise
};

function update(req, codigo) {
    var normalizedDate = new Date().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})
    var promise = Clientes.update({
        Cliente_Codigo: req.body.Cliente_Codigo,
        Cliente_Descripcion: req.body.Cliente_Descripcion,
        Cliente_Region: req.body.Cliente_Region,
        Cliente_Industria: req.body.Cliente_Industria,
        Cliente_Empresa: req.body.Cliente_Empresa,
        Cliente_Moneda_Principal: req.body.Cliente_Moneda_Principal,
        Cliente_Logo: req.body.Cliente_Logo,
        Cliente_Observacion: req.body.Cliente_Observacion,
        Usuario_Creacion: req.body.Usuario_Creacion,
        Usuario_Modificacion: req.body.Usuario_Modificacion,
        Fecha_Modificacion: normalizedDate, //DATE NOW,
        Visible: req.body.Visible
    }, {
        where: {
            Cliente_Codigo: codigo
        }
    })
    return promise
};

function destroy(codigo) {
    var promise = Clientes.destroy({
        where: {
            Cliente_Codigo: codigo
        }
    })
    return promise
};

export {findAll,findAllByDescription,find,create,destroy,update};