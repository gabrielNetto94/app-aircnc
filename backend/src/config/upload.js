const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'), //usa o path para apontar o caminho que será salva a imagem
        filename: (req, file, callback) => {

            const ext = path.extname(file.originalname);//pega a extensão original do arquivo
            const name = path.basename(file.originalname, ext); //pega o nome original do arquivo

            callback(null, `${name}-${Date.now()}${ext}`); //concatena nome original+timestempo+extensão original do arquivo
        }
    }),
};