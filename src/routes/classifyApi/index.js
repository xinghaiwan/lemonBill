/*
 * @Author: LiYueYang 
 * @Date: 2019-03-21 15:38:17 
 * @Last Modified by: LiYueYang
 * @Last Modified time: 2019-03-21 20:02:27
 */

var Mongo = require('mongodb-curd');
var batabaseName = "lemonBill";
var collcationName = "custom";
/* GET users listing. */
module.exports = {
    custom: function(req, res, next) {
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
    },
    addCustom: function(req, res, next) {
        let { icon, title, type, common } = req.body;
        if (!icon || !title || !type || !common) {
            res.send({ code: 2, msg: '参数不完整' })
        }
        Mongo.insert(batabaseName, 'classify', req.body, function(result) {

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
    },
    getClassify: function(req, res, next) {
        let { common, type } = req.query;
        Mongo.find(batabaseName, 'classify', {
            "common": { $in: ['y', common] },
            "type": type
        }, function(result) {
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
}