const express = require('express');
const app = express();


const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Raymundo',
        anio: new Date().getFullYear()
    });

});



app.get('/about', function(req, res) {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});