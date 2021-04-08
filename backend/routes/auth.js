const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUserProfile,
    updatePassword,
    updateProfile,
    logout,
    allUsers,
    getUserDetails,
    updateUser,
    deleteUser

} = require('../controllers/authController');


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser, getUserProfile)
router.route('/password/update').put(isAuthenticatedUser, updatePassword)
router.route('/me/update').put(isAuthenticatedUser, updateProfile)

router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('Administrator'), allUsers)
router.route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('Administrator'), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('Administrator'), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles('Administrator'), deleteUser)

module.exports = router;