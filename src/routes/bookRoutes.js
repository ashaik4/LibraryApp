
/**
 * Created by Arshad Shaik   on 7/26/2016.
 */

var express = require('express');

var bookRouter = express.Router();
var router = function(nav){
    var books;
    books = [
        {
            title: 'Cracking The Coding Interview',
            genre: 'Self Help',
            author: 'Gayle Laakman McDowell',
            read: false
        },
        {
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'Data Structures And Algorthms Made Easy',
            genre: 'Computer Science',
            author: 'Narasimha Karumanchi',
            read:false
        },
        {
            title: 'Introduction To Algorithms',
            genre: 'Computer Science',
            author: 'C.L.R.S',
            read: false
        }


    ];

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
}

module.exports = router;