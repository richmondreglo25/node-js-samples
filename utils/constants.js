import url from 'url';
import path from 'path';

export default {
    __filename: url.fileURLToPath(import.meta.url),
    __dirname: path.dirname(filename)
}