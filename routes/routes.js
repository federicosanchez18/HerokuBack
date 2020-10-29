
//Seteo rutas
function seteoRutas(app) {
    app.set('puerto', process.env.PORT || 1337);
    app.use('/', require('../routes/main'));
    app.use('/proyectos', require('../routes/proyectos'));
    app.use('/empresas', require('../routes/empresas'));
    app.use('/tipos_empresas', require('../routes/tipos_empresas'));
    app.use('/unidades_negocios', require('../routes/unidades_negocios'));
    app.use('/industrias', require('../routes/industrias'));
    app.use('/clientes', require('../routes/clientes'));
    app.use('/clientes_fiscales', require('../routes/clientes_fiscales'));
    app.use('/facturables', require('../routes/facturables'));
    app.use('/proyectos_alcances', require('../routes/proyectos_alcances'));
    app.use('/proyectos_tipos', require('../routes/proyectos_tipos'));
    app.use('/horas_tipos', require('../routes/horas_tipos'));
    app.use('/tipos_tecnologias', require('../routes/tipos_tecnologias'));
    app.use('/tecnologias', require('../routes/tecnologias'));
    app.use('/regiones_agrupadas', require('../routes/regiones_agrupadas'));
    app.use('/regiones', require('../routes/regiones'));
    app.use('/estados', require('../routes/estados'));
    app.use('/tipos_colaboradores', require('../routes/tipos_colaboradores'));
    app.use('/colaboradores_puestos', require('../routes/colaboradores_puestos'));
    app.use('/colaboradores', require('../routes/colaboradores'));
    app.use('/colaboradores_areas', require('../routes/colaboradores_areas'));
    app.use('/idiomas', require('../routes/idiomas'));
    app.use('/proyectos_tecnologias', require('../routes/proyectos_tecnologias'));
    app.use('/feriados', require('../routes/feriados'));
    app.use('/monedas', require('../routes/monedas'));
    app.use('/usuarios', require('../routes/usuarios'));
    app.use('/horas',require('../routes/horas'))

}

export {seteoRutas};