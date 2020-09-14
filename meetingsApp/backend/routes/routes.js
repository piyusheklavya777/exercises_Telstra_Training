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

// router.get('/', (req, res, next)=> {

//     return  res.status(200).json('get request api/')
//     //next()
// })
// router.get('/',

//---------------------
// router.get('/secret', function(req,res) {
//     const authHeader = req.header('Authorization');
//     console.log(authHeader)
// })

//---------------------

router.post('/login', (req, res, next) => {
    if(!req.body.email && !req.body.password) {
        const err = new Error('USERNAME/PASSWORD/BOTH missing in /login POST request '); //ERROR object sends a HTML file 
        err.status = 403
        return next( err )
    }
        let email = req.body.email
        let password = req.body.password
        
        let user = {}
        User.find({email:email, password:password},{_id:0, __v:0, password:0}).exec((err, result)=> {
            if(err) {
                err.status = 403; next(err)
            }
            if(!result || result.length==0) {
                return res.status(403).json({message: 'Login failed! User credentials not matched.'}) 
            }           

            const claims = {   email: email  }
            jwt.sign(claims, 'shh...', {expiresIn: '24h'}, function(error, token) {
                if(error) return res.status(401).json({ message: error.message })
    
                res.status(200).json({
                    message: 'Signed in sucessfully',
                    token: token,
                    user : result[0]
                })
            } )
            
        })
     //   if(!user) {  return res.status(403).json({message: 'Login failed! User credentials not matched.'})  }

        

        //jwt        
})  // router.post('/login',

//////////////////////////////////////////////
router.post('/signup', (req,res,next)=> {
    let user = req.body;
    if(!user) {
        const err = new Error('USER details missing in /signup POST request '); //ERROR object sends a HTML file 
        err.status = 403
        return next( err )
    }
    User.find({email: user.email, password: user.password }).exec((err,result)=> {
        if(result && result.length) {
            res.status(403).json({message: 'User already exist'})
        }
        else {
            User.create(user, (err, userWithId)=> {
                if(err) {
                    err.status = 500
                    return next( err )
                }
                res.status(200).json(userWithId)
            } )
        }
        
        
    })
})
//////////////////////////////////////////////

// router.post('/addteam', (req,res, next)=> {
//     console.log('POST /addteam');
//     const team = req.body;

//     if(!team) {
//         const err = new Error( 'Team should be included in request body' );
//         err.status = 403;
//         return next( err );
//     }
//     Team.create(team, (err, teamWithId) => {
//         if(err) {
//             err.status = 500;
//             return next( err )
//         }
//         res.status( 200 ).json( teamWithId )
//     } )

// }) // teams feature later
//////////////////////////////////////////////

router.post('/meetings', (req, res, next) => {
    if(!req.body.meeting.MeetingDate) {
        const err = new Error('MEETING DETAILS missing in /login POST request '); //ERROR object sends a HTML file 
        err.status = 403
        return next( err )
    }
    let meeting = req.body.meeting;
    let creatorEmail = req.body.email;
    meeting = {
        ...meeting,
        attendees : [...meeting.attendees, creatorEmail]
    }
    console.log(meeting); return res.status(500).json({message: "lol"})
    Meeting.create(meeting, (err, meetingWithId)=> {
        if(err) {
            console.log('error creating meeting, err :', err)
            err.status = 500;
            return next(err)
        }
        res.status(200).json(meetingWithId)
    })
}) // router.post('/meetings',




router.get('/meetings', (req, res, next)=> {

    let date = req.query.date;
    let searchTerm = req.query.search_terms;
    let email = req.query.email;

    let dateTodayISO= Date.parse((new Date()).toDateString()) // seconds since 1 Jan 1970. To compare today's date, toDateString() is needed

    if(!email) {
        const err = new Error('EMAIL missing in /login POST request '); //ERROR object sends a HTML file 
        err.status = 403
        return next( err )
    }
    //console.log(`meetings search ${date} , ${searchTerm} , ${email} , ${dateTodayISO}`)

    Meeting.find({attendees: {$in:[email]} }).exec((err, resultEmail)=> {
        if(err) {
            console.log('error finding meeting with email; ERR: ', err)
            err.status = 500;  return next( err );
        }

        const resultEmailDate = resultEmail.filter((eachResultEmail) => {
            if(!date)
            return true
            if(date === "TODAY" || date === "PRESENT")
            return Date.parse(eachResultEmail.MeetingDate) === dateTodayISO;
            if(date === "PAST")
            return Date.parse(eachResultEmail.MeetingDate) < dateTodayISO;
            if(date === "FUTURE")
            return Date.parse(eachResultEmail.MeetingDate) > dateTodayISO;

        })

        let resultEmailDateSearchterm = resultEmailDate.filter((eachResultEmailDate)=> {

            if(!searchTerm) return true;
            if(     eachResultEmailDate.title.search(searchTerm) !== -1 || eachResultEmailDate.description.search(searchTerm) !== -1   ) return true;
        })

       return res.status( 200 ).json( resultEmailDateSearchterm );
    })
})

router.get('/calendar', (req, res, next)=> {
    let email = req.query.email;

    Meeting.find({attendees: {$in:[email]} }).exec((err, resultEmail)=> {
        if(err) {
            console.log('error finding meeting with email; ERR: ', err)
            err.status = 500;  return next( err );
        }
        return res.status(200).json(resultEmail)
    })

})





//--------------middleware tools------------------

// function getUser(username,password) {

//     User.find({email:username, password:password},{_id:0}).exec((err, result)=> {
//         if(err) {
//             err.status = 403; next(err)
//         }
//     })


    // return users.find((eachUserInDB)=> {
    //     return eachUserInDB.username === username && eachUserInDB.password === password
    // })
//}

//-------------------------------------------------
module.exports = router