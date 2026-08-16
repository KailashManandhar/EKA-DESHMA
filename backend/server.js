import http from 'node:http'
import path from 'node:path'
import fs from 'fs/promises'
import getContentType from './utils/getContentType.js'
import getData from './utils/getData.js'
import sendResponse from './utils/sendResponse.js'
const PORT = 8000


const frontend_path = path.join(import.meta.dirname, '..', 'frontend-JS')
const data_path = path.join(import.meta.dirname, 'data', 'data.json')

let file = ''

const server = http.createServer(async (req, res) => {
    let data
    if (req.url === '/api') {
        data = await getData(data_path)
        data = JSON.parse(data)
        console.log(typeof data);


        if (req.method === 'GET') {
            sendResponse({ res: res, statusCode: 200, contentType: 'application/json', payload: JSON.stringify(data) })
            return
        }
        else if (req.method === 'POST') {
            let body = ''
            try {
                for await (const chunk of req) {
                    body += chunk
                }

                const parsed = JSON.parse(body)
                data.push(parsed)
                await fs.writeFile(data_path, JSON.stringify(data, null, 2))
                sendResponse({ res, statusCode: 201, contentType: 'application/json', payload: "everything working" })
                return
            }
            catch (error) {
                console.log(error);
                sendResponse({ res, statusCode: 500, contentType: 'application/json', payload: JSON.stringify({ error: "Server failed to process POST request" }) })

            }
        }
    }


    const contentType = getContentType(path.extname(req.url))
    try {
        const filePath = path.join(frontend_path, req.url === "/" ? "index.html" : req.url)
        const content = await fs.readFile(filePath)
        sendResponse({ res: res, contentType: contentType, statusCode: 200, payload: content })
        return
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