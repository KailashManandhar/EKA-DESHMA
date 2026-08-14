import http from 'node:http'
import path from 'node:path'
import fs from 'fs/promises'
import getContentType from './utils/getContentType.js'
const PORT = 8000


const frontend_path = path.join(import.meta.dirname, '..', 'frontend')

let file = ''

const server = http.createServer(async (req, res) => {
    console.log(req.url);

    const contentType = getContentType(path.extname(req.url))
    try {
        const filePath = path.join(frontend_path, req.url === "/" ? "index.html" : req.url)
        const content = await fs.readFile(filePath)
        res.setHeader('Content-type', contentType)
        res.statusCode = 200
        res.end(content)
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            res.statusCode = 404
            res.end('Not Found')
            return
        }

        res.statusCode = 500
        res.end('Internal Server Error')
    }


})


server.listen(PORT, () => console.log("starting server.. ")
)