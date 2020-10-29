function deleteHandler(promise, req, res) {
    if (JSON.stringify(promise) === 'null') {
        res.json('No hay datos');
    }
    else {
        promise.destroy(req.params.tecnologia_codigo,req.params.tecnologia_codigo).then(
            res.json("Eliminado Correctamente")
        )
    }
}

function notFoundHandler(promise, req, res) {
    if (JSON.stringify(promise) === '[]') {
        res.status(404);
        res.json('No hay datos');
    }
    else {
        res.json(promise);
        console.log(promise);
    }
}

function idNotFoundHandler(promise, req, res) {
    if (JSON.stringify(promise) === "null") {
        res.status(404);
        res.json('No existe el Id solicitado');
    }
    else {
        res.json(promise)
    }
}

export {deleteHandler,notFoundHandler,idNotFoundHandler};