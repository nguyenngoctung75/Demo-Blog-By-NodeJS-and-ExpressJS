const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/mongoose.js')
class MeController {
    // [GET /me,stored/coursed]
    storedCourses(req, res, next) {

        Promise.all([Course.find({}).sortable(req), Course.countDocumentsWithDeleted({deleted: true})])
            .then(([courses, deletedCount]) => 
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses)
                })
            ) 
            .catch(next)    

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount)
        //     })
        //     .catch(() => {

        //     })

        // Course.find({})
        //     .then(courses => res.render('me/stored-courses', {
        //         courses: multipleMongooseToObject(courses)
        //     }))
        //     .catch(next)         
    }

    // [GET /me/trash/coursed]
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted: true})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)  
    }
}

module.exports = new MeController();
