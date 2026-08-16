import fs from "node:fs/promises"
import path from "node:path"
export default async function getData() {
    const pathname = path.join(import.meta.dirname, '..', 'data', 'data.json')
    const data = await fs.readFile(pathname, 'utf-8')
    return (data)
}