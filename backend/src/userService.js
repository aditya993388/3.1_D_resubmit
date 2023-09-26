const recoModel = require('./recoModel');
var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        userModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.name = userDetails.name;
        userModelData.email = userDetails.email;
        userModelData.message = userDetails.message;

        userModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }

 module.exports.createRecoDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new recoModel();
 
        userModelData.name = userDetails.name;
        userModelData.dish = userDetails.dish;
        userModelData.desc = userDetails.desc;
        userModelData.ingredients = userDetails.ingredients;

        userModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }