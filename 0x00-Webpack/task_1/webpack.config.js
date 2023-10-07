import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js')
},
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "public" )
    }
}