const mongoose = require('mongoose');

// create models as importable from instance
require( './models/dataModels.js' );

mongoose.connect( 'mongodb://localhost/database', { useNewUrlParser: true } );

const connection = mongoose.connection;

connection.on( 'error', console.error.bind( console, 'connection error:') ); //kok100

connection.on('open', function() {
  console.log( 'connected to mongodb database' );
});

mongoose.set('useFindAndModify', false)
module.exports = connection;