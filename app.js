var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');


var app = express();

var port = process.env.PORT || 5000;
var nav = [{
    link: '/Books',
    Text: 'Books'
}, {
    link: '/Authors',
    Text: 'Authors'
}];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);// This line will execute the passport.js file along with passed app.js




app.set('views','./src/views');
app.set('view engine','ejs');


app.use('/Books',bookRouter);
app.use('/Authors',authorRouter);
app.use('/Admin',adminRouter);
app.use('/Auth',authRouter);




app.get('/',function(req,res) {
    res.render('index',{title: 'Hello from render',nav:nav
    });
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Server running on  ' + port);

});