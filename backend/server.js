import http from 'node:http'
import path from 'node:path'
import fs from 'fs/promises'
import getContentType from './utils/getContentType.js'
import getData from './utils/getData.js'
const PORT = 8000


const frontend_path = path.join(import.meta.dirname, '..', 'frontend-JS')

let file = ''

const server = http.createServer(async (req, res) => {
    let data
    if (req.url === '/api') {
        if (req.method === 'GET') {
            data = await getData()
            console.log(data);
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 200
            res.end(data) // Send JSON string back to frontend
            return
        }
    }


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