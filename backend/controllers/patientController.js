const Patient = require('../models/patient')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')

// Create new patient   =>   /api/sdh/admin/patient/new
exports.newPatient = catchAsyncErrors(async(req, res, next) => {

    req.body.user = req.user.id;
    const patient = await Patient.create(req.body);

    res.status(201).json({
        success: true,
        patient
    })
})


// Get all patients   =>   /api/sdh/patients?keyword=apple
exports.getPatients = catchAsyncErrors(async(req, res, next) => {

    const resPerPage = 4;
    const patientsCount = await Patient.countDocuments();

    const apiFeatures = new APIFeatures(Patient.find(), req.query)
        .search()
        .filter()

    let patients = await apiFeatures.query;
    let filteredPatientsCount = patients.length;

    apiFeatures.pagination(resPerPage)
    patients = await apiFeatures.query;

    res.status(200).json({
        success: true,
        patientsCount,
        resPerPage,
        filteredPatientsCount,
        patients
    })

})

// Get all patients (Admin)  =>   /api/sdh/admin/patients
exports.getAdminPatients = catchAsyncErrors(async(req, res, next) => {

    const patients = await Patient.find();

    res.status(200).json({
        success: true,
        patients
    })

});

// Get single patient details   =>   /api/sdh/patient/:id
exports.getSinglePatient = catchAsyncErrors(async(req, res, next) => {

    const patient = await Patient.findById(req.params.id);

    if (!patient) {
        return next(new ErrorHandler('Patient not found', 404));
    }


    res.status(200).json({
        success: true,
        patient
    })

});

// Update Patient   =>   /api/sdh/admin/patient/:id
exports.updatePatient = catchAsyncErrors(async(req, res, next) => {

    let patient = await Patient.findById(req.params.id);

    if (!patient) {
        return next(new ErrorHandler('Patient not found', 404));
    }

    patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        patient
    })

});

// Delete Patient   =>   /api/sdh/admin/patient/:id
exports.deletePatient = catchAsyncErrors(async(req, res, next) => {

    const patient = await Patient.findById(req.params.id);

    if (!patient) {
        return next(new ErrorHandler('Patient not found', 404));
    }

    await patient.remove();

    res.status(200).json({
        success: true,
        message: 'Patient is deleted.'
    })

});