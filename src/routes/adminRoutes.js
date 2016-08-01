var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
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
    },
    {
        title: 'Algorithm Design Manual',
        genre: 'Computer Science',
        author: 'Steven Skeina',
        read: false
    }


];
var router = function(nav){
    adminRouter.route('/addBooks').get(function(req,res){
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url,function(err,db){
            var collection = db.collection('books');
            collection.insertMany(books,function(err,results){
                res.send(results);
                db.close();
            });
        });
        //res.send('Inserting Books');
    });



    return adminRouter;
};

module.exports = router;