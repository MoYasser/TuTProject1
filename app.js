const express = require('express');
const app = express();
var axios = require("axios").default;
const mongoose = require('mongoose');

const Reports = require('./models/reports');

const dbURI = 'mongodb+srv://yasser:<1234>@tutproject.ugn3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.listen(3000);

app.set('view engine','ejs');

console.log('running');



app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

app.get('/covid/:EnterCountryCode', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        params: {code: req.params.EnterCountryCode},
        headers: {
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            'x-rapidapi-key': '7d4b460898mshed336aa88c5c303p19bd30jsn20803d3c9b90'
        }
    };

    axios.request(options).then(function (response) {
        blogs = response.data;

    }).catch(function (error) {
        console.error(error);
    });
    console.log(blogs);
    res.render('covid', { title: 'Covid Results', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});