
/**
 * Created by Arshad Shaik   on 7/26/2016.
 */

var express = require('express');

var bookRouter = express.Router();
var router = function(nav){



    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView',
                {
                    title: 'Books',
                    nav: nav,
                    book: books
                });
        });
    bookRouter.route('/:id')
        .get(function(req,res){
            var id = req.params.id;
            res.render('bookView',
                {
                    title: 'Books',
                    nav: nav,
                    book: books[id]
                });
        });
    return bookRouter;
};

module.exports = router;