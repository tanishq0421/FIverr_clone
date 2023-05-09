const express = require('express');
const {deleteUser} = require('./../controllers/userController');
const {verifyToken} = require('./../middleware/jwt');

const router = express.Router();

router.delete('/deleteUser/:_id',verifyToken,deleteUser);

module.exports = router;