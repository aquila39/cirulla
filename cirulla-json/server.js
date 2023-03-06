const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults(['noCors'])

const port = 8000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/next-id', (req, res) => {
    res.jsonp(req.query)
})


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    // if (req.method === 'POST') {
    // req.body.createdAt = Date.now()
    console.log(res.statusCode);
    // }

    // Continue to JSON Server router
    next()
})

// Use default router
server.use('/api', router)
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})
