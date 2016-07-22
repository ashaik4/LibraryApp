var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();


app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');
app.use('/Books',bookRouter);

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
        res.render('books',
            {
                title: 'Books',
                nav: [
                    {link: '/Books', Text: 'Books'},
                    {link: '/Authors', Text: 'Authors'}],
                books: books
            });
    });
bookRouter.route('/single')
    .get(function(req,res){
        res.send('Hello Single Book');
    });
app.get('/',function(req,res) {
    res.render('index',{title: 'Hello from render',nav:[
        {link:'/Books',Text: 'Books'},
        {link:'/Authors',Text: 'Authors'}]
    });
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Server running on  ' + port);

});