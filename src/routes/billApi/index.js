/*
 * @Author: LiYueYang 
 * @Date: 2019-03-22 10:13:51 
 * @Last Modified by: LiYueYang
 * @Last Modified time: 2019-03-22 14:26:21
 */
var Mongo = require('mongodb-curd');
var batabaseName = "lemonBill";
var collcationName = "bill";
/* GET users listing. */
module.exports = {
    getBill: function(req, res, next) {
        let { Time, common, title } = req.body;
        if (!Time || !common) {
            res.send({ code: 2, msg: '参数不完整' });
        }
        let reg = new RegExp('^' + Time);
        let data = { Time: reg, common: common };
        if (title) {
            data = { Time: reg, common: common, title: { $in: JSON.parse(title) } };
        }
        Mongo.find(batabaseName, 'bill', data, function(result) {
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
    addBill: function(req, res, next) {
        let { icon, title, money, type, common } = req.body;
        let now = new Date();
        let Time = {
            y: now.getFullYear(),
            m: now.getMonth() + 1,
            d: now.getDate()
        }

        if (!icon || !title || !money || !type) {
            res.send({ code: 2, msg: '参数不完整' })
        }
        req.body.Time = Time.y + '-' + Time.m + '-' + Time.d
        Mongo.insert(batabaseName, 'bill', req.body, function(result) {
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
    delBill: function(req, res, next) {
        let _id = req.query._id;
        if (!_id) {
            res.send({ code: 2, msg: '参数不完整' })
        }
        Mongo.remove(batabaseName, 'bill', req.query, function(result) {
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