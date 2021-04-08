const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Patient Name'],
        trim: true,
        maxLength: [40, 'Patient name cannot exceed 40 characters'],
        unique: true,
    },
    age: {
        type: Number,
        required: [true, 'Please Enter Patient Age'],
        default: 0.0
    },
    sex: {
        type: String,
        required: [true, 'Please Enter Patient Sex'],
    },
    occupation: {
        type: String,
        required: [true, 'Please Enter Patient Occupation'],
    },
    contactNumber: {
        type: Number,
        required: [true, "Please Enter Patient Phone Number"]
    },
    residentialAddress: {
        type: String,
        required: [true, 'Please Enter Patient Address'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Patient', patientSchema);