var restify = require('restify'),
    server = restify.createServer();

server.use(restify.bodyParser());

// Static file handling
server.get("/", restify.serveStatic({
    directory: '.',
    default: 'static.htm'
}));

server.get('/test', function (req, res, next) {
    res.send(200, {
        'value': 'Hello World'
    });
    return next();
});

server.post('/test', function (req, res, next) {
    res.send(200, {
        'value': 'Hello World ' + req.body.label
    });
    return next();
});


server.get('/test/:id', function (req, res, next) {
    res.send(200, {
        'value': 'Hello World ' + req.params.id
    });
});

server.listen(4444, function () {
    console.log(server.url);
});
