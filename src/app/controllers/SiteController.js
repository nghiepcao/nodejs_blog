const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    //[GET] /news
    index(req, res, next) {
        //callback
        // Course.find({}, function(err, courses){
        //     if(!err){
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }  
        // });
        //promises
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);

        //res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
