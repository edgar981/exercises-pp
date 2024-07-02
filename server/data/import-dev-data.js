const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Mesocycle = require('./../models/mesocycleModel');

dotenv.config({path: './config.env'});


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)

mongoose.connect(DB).then(() => {
    console.log('DB connection succesfull!');
});

//Read JSON file.
const mesocycles = JSON.parse(fs.readFileSync(`${__dirname}/mesocycles.json`, 'utf-8'));

//Import data into DB
const importData = async () => {
    try {
        await Mesocycle.create(mesocycles);
        console.log('Data successfully loaded!');
    } catch(error) {
        console.log(error);
    }
    process.exit();
}

const deleteData = async () => {
    try {
        await Mesocycle.deleteMany();
        console.log('Data successfully deleted!');
    } catch(error) {
        console.log(error);
    }
    process.exit();
}

if (process.argv[2] === '--import'){
    importData();
} else if (process.argv[2] === '--delete'){
    deleteData();
}