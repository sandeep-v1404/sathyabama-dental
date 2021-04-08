const Patient = require('../models/patient');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const patients = require('../data/patients');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedPatients = async() => {
    try {

        await Patient.deleteMany();
        console.log('Patients are deleted');

        await Patient.insertMany(patients)
        console.log('All Patients are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedPatients()