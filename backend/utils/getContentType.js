export default function getContentType(ext) {
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.jsx': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.ico': 'image/x-icon',
        '.pdf': 'application/pdf',
        '.mp3': 'audio/mpeg',
        '.mp4': 'video/mp4'
    }

    return mimeTypes[ext] || 'text/html'
}