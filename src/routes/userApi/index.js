/*
 * @Author: LiYueYang 
 * @Date: 2019-03-21 15:04:24 
 * @Last Modified by: LiYueYang
 * @Last Modified time: 2019-03-21 16:43:43
 */
var Mongo = require('mongodb-curd');
var batabaseName = "lemonBill";
var collcationName = "user";
/* GET users listing. */
module.exports = function(req, res, next) {
    Mongo.find(batabaseName, collcationName, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    });
}