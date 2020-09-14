//running init.js to establish db connection first
require('./init')

const mainRouter = require('./routes/routes')
const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors())


//------Main Routing below-------//

app.use((req, res, next)=> {
    next()
})

app.use(express.urlencoded({ extended: false }))
app.use( express.json() );

app.use('/api', mainRouter)


//-------------------------------------------------------------------------
//final error handler
app.use(( error, req, res) => {
   res.status( error.status || 500 ).send( error );
});
//listening at the port env.PORT OR 3000
app.set('port', process.env.PORT || 3000)
var server = app.listen(app.get('port'), function () {
 console.log(`server started on port ${app.get('port')} `)
})