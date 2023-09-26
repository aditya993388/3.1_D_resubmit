var express = require('express');

var userController = require('../src/userController'); 
const router = express.Router();


router.route('/user/getAll').get(userController.getDataConntrollerfn);

router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/createReco').post(userController.createRecommendationControllerFn);

module.exports = router;
