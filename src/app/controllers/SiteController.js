const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET /]
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                
                // Nếu không có lỗi, trả về danh sách khóa học dưới dạng JSON
                res.render('home' , {
                    courses: multipleMongooseToObject(courses)
                });
            })
            // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
            .catch(next);
        
    }

    // [GET /search]
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
