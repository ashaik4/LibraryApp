
/**
 * Created by Arshad Shaik   on 7/26/2016.
 */

var express = require('express');

var authorRouter = express.Router();
var router = function(nav){
    var authors;
    authors = [
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
        },
        {
            title: 'Algorithm Design Manual',
            genre: 'Computer Science',
            author: 'Steven Skeina',
            read: false
        }


    ];

    authorRouter.route('/')
        .get(function (req, res) {
            res.render('authorListView',
                {
                    title: 'Books',
                    nav: nav,
                    authors: authors
                });
        });
    authorRouter.route('/:id')
        .get(function(req,res){
            var id = req.params.id;
            res.render('bookView',
                {
                    title: 'Books',
                    nav: nav,
                    authors: authors[id]
                });
        });
    return authorRouter;
}

module.exports = router;