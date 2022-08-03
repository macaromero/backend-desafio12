const mongoose = require('mongoose');

const mongoConnection = async () => {
    const CS = 'mongodb+srv://macaromero:msm8BYiXaNCnTmJJ@cluster0.qa52w3x.mongodb.net/ecommerce?retryWrites=true&w=majority';
    try {
        await mongoose.connect(CS);
        console.log("Conexión a base de datos mongodb establecida");
    } catch (error) {
        console.log("Ocurrió un error al conectarse a la base de datos de mongodb", error);
    };
};

module.exports = { mongoConnection };