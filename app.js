var restify = require('restify');

var server = restify.createServer({
    name: 'RestifySimpleExample'
});

server.get("/", restify.serveStatic({
    directory: '.',
    default: 'static.htm'
}));

server.get('/test', function (req, res, next) {
    res.send(200, {
        'Hello': 'World'
    });
    return next();
});

server.listen(4444);
