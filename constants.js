import url from 'url';
import path from 'path';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
    __filename: filename,
    __dirname: dirname
}