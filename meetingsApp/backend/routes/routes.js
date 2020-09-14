const express = require('express');
const router = express.Router();

const mongoose = require( 'mongoose' );
const jwt = require('jsonwebtoken');

//importing the three data models below
const User    = mongoose.model( 'User' );
const Meeting = mongoose.model( 'Meeting' );
const Team    = mongoose.model( 'Team' );

//testing the jwt and database operations by dummy db (using a local json instead of db)
let users = [
    {
        username: 'u1',
        password: 'p1'
    },{
        username: 'u2',
        password: 'p2'
    },{
        username: 'u3',
        password: 'p3'
    }
]
//-------------------------ROUTING-----------------

router.get('/', (req, res, next)=> {

    res.status(200).json(' ha bhai bol router bol rha hu !')
})
// router.get('/',

router.post('/login', (req, res, next) => {
    if(!req.body.username && !req.body.password) {
        const err = new Error('USERNAME/PASSWORD/BOTH missing in /login POST request '); //ERROR object sends a HTML file 
        err.status = 403
        return next( err )
    }
        let username = req.body.username
        let password = req.body.password
        
        const user = getUser(username, password)
        if(!user) {  return res.status(403).json({message: 'Login failed! User credentials not matched.'})  }

        const claims = {   username: username   }

        jwt.sign(claims, 'shh...', {expiresIn: '24h'}, function(error, token) {
            if(error) return res.status(401).json({ message: error.message })

            res.status(200).json({
                message: 'Signed in sucessfully',
                token: token,
                username: username
            })
        } )        
})  // router.post('/login',

router.post('/addteam', (req,res, next)=> {
    console.log('POST /addteam');
    const team = req.body;

    if(!team) {
        const err = new Error( 'Team should be included in request body' );
        err.status = 403;
        return next( err );
    }
    Team.create(team, (err, teamWithId) => {
        if(err) {
            err.status = 500;
            return next( err )
        }
        res.status( 200 ).json( teamWithId )
    } )

})


//--------------middleware tools------------------

function getUser(username,password) {
    return users.find((eachUserInDB)=> {
        return eachUserInDB.username === username && eachUserInDB.password === password
    })
}

//-------------------------------------------------
module.exports = router