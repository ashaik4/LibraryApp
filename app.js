var express = require('express');
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



app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');


app.use('/Books',bookRouter);
app.use('/Authors',authorRouter);
app.use('/Admin',adminRouter);




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