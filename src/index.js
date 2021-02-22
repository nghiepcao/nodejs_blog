const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
//DB
const db = require('./config/db');
//connect db
db.connect();

//use static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'))
// Method - override
app.use(methodOverride('_method'))
// Template engine
app.engine('hbs', handlebars({
  extname : '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
console.log(__dirname);

// routes init
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})