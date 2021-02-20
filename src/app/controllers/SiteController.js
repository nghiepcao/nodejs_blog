const Course = require('../models/Course');

class SiteController {

    //[GET] /news
    index(req, res) {

        Course.find({}, function(err, courses){
            if(!err){
                res.json(courses);
            } else {
                res.status(500).json({
                    error: 'Something wrong with your code'
                });
            }  
        });

        //res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
