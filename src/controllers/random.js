const {fork} = require('child_process');

const random = (req, res) => {
    const {cant} = req.query;
    const resultado = fork("./src/utils/random.js", [cant]);

    resultado.send('start', (e) => {
        console.log("error:", e)
    });
    
    resultado.on('finish', result => { 
        res.status(200).json({"Números": result});
    });
};

module.exports = {random}