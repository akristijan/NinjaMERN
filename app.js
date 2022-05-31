const express = require('express');
const morgan = require('morgan')
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000);
//middleware and static
app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/', (req,res)=> {
    const blogs = [{title: "Yoshi okomuda hajo", snippet: "lorem isplum"},
    {title: "Yoshi finds eggs", snippet: "lorem isplum sit amat"}, {title: "How to defeat bowser", snippet: "lorem isplum dictatae"},];
    res.render('index', {title: 'Home', blogs})
})

app.get('/about', (req,res)=> {
    res.render('about', {title: 'About'})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'});
})

//404
app.use((req,res) => {
    res.status(404).render('404', {title: '404'})
})