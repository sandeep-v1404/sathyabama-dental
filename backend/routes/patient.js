const express = require('express')
const router = express.Router();

const {
    getPatients,
    getAdminPatients,
    newPatient,
    getSinglePatient,
    updatePatient,
    deletePatient,
} = require('../controllers/patientController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');


router.route('/patients').get(getPatients);
router.route('/admin/patients').get(getAdminPatients);
router.route('/patient/:id').get(getSinglePatient);

router.route('/admin/patient/new').post(isAuthenticatedUser, authorizeRoles('Administrator'), newPatient);

router.route('/admin/patient/:id')
    .put(isAuthenticatedUser, authorizeRoles('Administrator'), updatePatient)
    .delete(isAuthenticatedUser, authorizeRoles('Administrator'), deletePatient);

module.exports = router;