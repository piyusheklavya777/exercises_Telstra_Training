//The following are solutions to questions in PDF MONGODB-201-201-lab-guide.pdf
// QUESTIONS as selected by faculty were solved in class and some as homework.

//Steps :
//Create a data/db location. In the folder that contains data, cmd
//mongod --dbpath "./data/db".
//then in any place (maybe your work directory), do these :

//to simply start working : choose the folder that contains data/db, data/logs,  mongod.conf 
//and then cmd in that folder and run :
//mongod -f ./mongod.conf
//then:  mongo in cmd...then "use <dbname>" then "db.<collectionName>.insertOne({})" or whatever commands

//the following command is run in folder which contains shows.js... last argument is the relative address. "./" is optional .
//it will also include this db in your list of existing dbs.
//to add a json or any db file, put it in data folder, as a sibling of db folder
// mongoimport -d exercises -c shows --drop --jsonArray shows.json
//mongoimport might not work. install mongoDB database tools and include address of it's bin file to user variables PATH in ENVIRONMENT.

//ALL THESE CODE WERE RUN ON CMD after initilizing mongo
//Q3

db.albums.insertOne({ 
    yearOfRelease: 2002,
    musicDirector: 'director C',
    lyricist: 'writer C', 
    songs: ['songC1','songC2','songC3'],    
})

//Q5
db.quesfive.insertMany([{_id:1,x:1},{_id:2, x:2}])
db.quesfive.insertMany([{_id:3,x:3},{_id:2, x:2}, {_id:4,x:4}, {_id:5,x:5}])
db.quesfive.find()
db.quesfive.insertMany([{_id:3,x:3},{_id:2, x:2}, {_id:4,x:4}, {_id:5,x:5}], {ordered:false})
db.quesfive.find()
//{x:1}{x:2} //{x:3} error // {x:4} {x:5} ordered: false drops existing ID writes.


//Q6

//Q6 
db.shows.find({runtime:{$lt:60}}).pretty()
db.shows.find({runtime:{$gt:30 , $lt:60}}, {runtime: true}).pretty()
db.shows.find({"rating.average":{$gte:8}}).pretty()
db.shows.find({genres:"Drama"},  {name:true})
db.shows.find({genres:["Horror"]},{genres:true}) // only drama. So full array to be compared.
db.shows.find({genres: {$in: ["Drama", "Horror"]}}, {genres:true})
db.shows.find({type: {$in:["Animation", "Reality"] } } ).count() // output:24
db.shows.find({type: {$nin:["Drama", "Horror"] } } ).count() //nin - not in
db.shows.find({"network.name": {$nin:["HBO", "FOX"] } } ).count() // 202
db.shows.find({    $or: [ {genres:'Drama'},{genres:'Horror'} ]   }).count() // 159
db.shows.find( {
    genres: { $not: { $in: ['Drama','Horror'] } }
} ).count() // 81
db.shows.find({    $and: [ {genres:'Drama'},{genres:'Horror'} ]   }, {genres:true}) //17
//iv
db.shows.find({    $and: [ {genres:'Drama'},{genres: ${ne: 'Horror'}} ] } , {genres:true})
//v !!!!
db.shows.find({$and: [
        {   $and: [ {genres:'Drama'},{genres: {$ne: 'Horror'}} ]  }
       ,{   $and: [ {genres:'Horror'},{genres:{$ne: 'Drama' }} ]  }
    ]
}).count() //not working as and is not a top level operator
//v | same, re-iterating
db.shows.find({$and: [
    {   $and: [ {genres:'Drama'},{genres: {$ne: 'Horror'}} ]  }
   ,{   $and: [ {genres:'Horror'},{genres:{$ne: 'Drama' }} ]  }
]
},{genres: true})
//
//Q6d
//i
db.shows.find({
     webChannel: {
        $exists: true,
        $ne : null
    }
},{webChannel:true}) //10
//ii
db.shows.find({
    "webChannel.country": {
       $ne : null
   }
},{webChannel:true}) //5
//iii
db.shows.find({
    webChannel: null
   }
,{webChannel:true}).count() //230
//iv
db.shows.find({
    webChannel: {$ne: null},
    $type: 'object'
   }
,).count() //not working

//reg-ex :
//Q6e
//i
db.shows.find(
    {name: {$regex: /Last/i}},
    {name:true}
) //3

//ii iii
db.shows.find(
    {
        name: {
            $regex: /Last/,  options : i
              }
    },
    {name:true}
)

// iv
db.shows.find({
    $expr: {
            $gt : [  "$weight", { $multiply: ["$rating.average", 10] } ]
           }
    },{ weight:1 , "rating.average":1 }
)
//v homework

// Use of $all Q6f i :
db.shows.find({
    genres: {$all: ['Drama','Horror'] }
},{genres:1, _id:0})//17

//Q 6f ii
db.shows.find({
    "schedule.days": {$all: ['Monday','Tuesay'] }
},{"schedule.days":1, _id:0}) //4

//Q 6f next part Create a collection...
db.students.insertMany([
    {
        name: "Ram",
        scores: [
            {subject:'History', score: 100},
            {subject: 'Geography', score: 95}
        ]
    },
    {
        name: "Shyam",
        scores: [
            {subject:'History', score: 92},
            {subject:'Science', score: 100},
            {subject:'English', score: 80}
        ]
    },
    {
        name: "Sita",
        scores: [
            {subject:'Commerce', score: 99},
            {subject: 'Maths', score: 85},
            {subject:'English', score: 85}
        ]
    }
])
//Q 6f i

db.students.find({
    "scores.subject" : "History",
    "scores.score": {$gt: 90}
},{name:1, _id: 0}) //Ram Shyam

//Q 6f ii
db.students.find(
    {
        scores: {
            $elemMatch: {   subject: "History", score : {$gt: 90}   }
        }
    },{name:1, _id: 0}) //ram n shyam

//Q 6f iii
db.students.find({
    scores: { $size: 2 }
},{name:1, _id: 0}) //ram

//Q6g i
db.students.find({
    "scores.subject": 'History'
},{name:1, _id:0, "scores.$":1}) // shows history subjects of ram n shyam

//Q6g ii
db.students.find(
    { "scores.subject": 'History'},{ name:1, scores:{$slice:2} }
).pretty() // ram's and shyam's first 2 subjects.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q 8

//Q8 a i
db.shows.updateMany({
    "network.country.code" : "US"
},{
    $set: {
        language: 'English (US)',
        locale: 'en-US'
    }
})//matched and modified 217 entries...

//Q8 a ii
db.shows.updateOne({
    weight: {$lt:40},
    "rating.average": {$gt: 7}
},{
    $inc: {weight: 10}, $set: {criticsChoice: true}
}) // matched-one, modified-one

//Q8a iii
db.shows.updateOne({
    weight: {$gt: 80},
    "rating.average" : {$lt: 6}
},{
    $set: {criticsChoice: false},
    $inc: {weight: -10}
}) // matched-one, modified-one

//Q8a iv change in Q : condition on weight 40<weight<60, rather than w<50

db.shows.updateMany({
    weight: {$lt: 60, $gt: 40}, "rating.average" : {$gt: 7}
},{
    $max: {weight: 50}
}) // matched-8, modified-one

//Q8a v
db.shows.updateMany({
    weight: {$lt: 60}, "rating.average" : {$gt: 8}
},{
    $mul : { weight: 1.33 }
}) //matched &modified 6

//Q8a vi
db.shows.updateMany({}, {
    $rename: { criticChoice: "cc" }
}) // matched-240, modified-one

//Q8a vii
db.shows.updateMany({}, {
    $unset: { cc:1 }
}) 

//Q8a viii with a lot of changes
db.shows.updateOne({
    name: 'Kapil Sharma Show', language: 'English'
}, { $set: {
    
    "rating.average" : 8,
    genres: ['HComedy']
    }
}, { upsert: true
}) // upserted an item. total count is 241 now,

////Q8b

db.shows.updateMany({
    "schedule.days" : 'Monday'
}, {
    $set: {
        "schedule.days.$": "monday"
    }
}) //matched & modified 36

//Q8b ii
db.shows.updateMany({
    genres: "Horror"
},{
    $push: {genres: "Supernatural"}
}) //matched & modified 23

//Q8b ii
db.shows.updateMany({
    genres: "Horror"
},{
    $push: {
        genres: {
            $each: ['Supernatural', 'Spook']
        }
    },

}) //matched & modified 23

//Q8b iii
db.shows.updateMany({
    genres: "Horror"
},{
    $push: {
        genres: {
            $each: ['Supernatural', 'Spook'],
            $sort:1
        }
    },

})

//Q8b iv
db.shows.updateOne({genres: "Supernatural"},{
    $pull: {
        genres: "Supernatural"
    }
}) //matched and modified 1

//Q8b v
db.shows.updateMany({},{
    $pop: {
        genres: 1
    }
}) //matched and modified 1

//
//Q8b v
db.shows.updateMany({},{
    $addtoset: {
        genres: {
            $each: ['Supernatural', 'Spook']
        }
    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AGGREGATION PIPELINE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q 9 
// a) Using $match to get a collection with a filtered set of documents
// i) Find all shows that have Drama as a genre
db.shows.aggregate(
    [
        {
            $match: {
                genres: 'Drama'
            }
        }
    ]
);

// ii) Find all shows on HBO
db.shows.aggregate(
    [
        {
            $match: {
                "network.name": 'HBO'
            }
        }
    ]
);

// // Using $group to group documents by field values and produce a new collection representing groups
// i) Group shows by the name of network they are running on,and also find the number of shows in each network
db.shows.aggregate(
    [
        {
            $group: {
                _id: "$network.name",
                numShows: {
                    $sum: 1
                }
            }
        }
    ]
);

// Group shows by name of network and country they are running in,and also find the number of shows, and average runtime of shows in each group (network+country combination)
// we also sort the results by network name
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                }
            }
        },
        {
            $sort: {
                "_id.network": 1
            }
        }
    ]
)


// Just like we can transform document to form new fields with subdocuments while projecting, we can also create a new array. Using the $push operator in $group stage, we can create a new array with one item per document in the group! This is a special feature of MongoDB with no equivalent in SQL (you can calculate only aggregate values like sum, average etc. there). Repeat the above exercise, and create an additional field “names” that is an array of names of all shows in the group.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                shows: {
                    $push: '$name'
                }
            }
        }
    ]
);

// Select all shows that are in English (“language” value), and then group them by their type. The output should have the names of the group in the type field, along with the number of shows in each group.
db.shows.aggregate(
    [
        {
            $match: {
                language: 'English'
            }
        },
        {
            $group: {
                _id: {
                    type: '$type'
                },
                numShows: {
                    $sum: 1
                },
                names: {
                    $push: '$name'
                }
            }
        }
    ]
)

// Repeat the exercise grouping shows by network name and country.The final results should show only the grouped documents of networks that have at least 5 shows.
db.shows.aggregate([
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                shows: {
                    $push: '$name'
                }
            }
        },
        {
            $match: {
                numShows: {
                    $gte: 5
                }
            }
        }
]);

// EXERCISE: Repeat the same but show only groups with average runtime at less than 50.

// Find the name,network name,schedule and runtime of all shows
// $concat, $toDate, $year, $convert

// networkName: HBO (US)
db.shows.aggregate(
    [
        {
            $project: {
                name: '$name',
                networkName: {
                    $concat: [
                        "$network.name", " (", "$network.country.code", ")"
                    ]
                },
                schedule: "$schedule.day",
                runtime: "$runtime"
            }
        },
        {
            $out: "results"
        }
    ]
)