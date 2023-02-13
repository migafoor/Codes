
SiteData.aggregate([
    {
        $match: {} // add your search here
    },
    {
        $project: { // add all the fields you need from the collection, if you need to omit something from the query results, just don't mention it here
            id: 1,
            clientes: 1,
            date: { $dateToString: { format: "%d/%m/%Y", date: "$date" } } // this will return the date in the format "dd/MM/yyyy"
        }
    },
    {
        $lookup: { // this is the alternative to the populate
            from: 'clientes',
            localField: 'cliente',
            foreignField: '_id',
            as: 'clientes'
        }
    },
    {
        $project: { // add all the fields you need from the collection, if you need to omit something from the query results, just don't mention it here
            id: 1,
            clientes: 1,
            date: { $dateToString: { format: "%d/%m/%Y", date: "$date" } } // this will return the date in the format "dd/MM/yyyy"
        }
    }
])

StartDate = moment(StartDate).format('DD-MM-YYYY');

db.collection('users').aggregate([
    {
        $lookup: {
            from: 'adjectives',
            localField: 'adj',
            foreignField: 'id',
            as: 'adjective_value'
         },
     },
    {$unwind:'$adjective_value'},
    {$project:{
         adjective_value:'$adjective_value.name',
         id: 1, 
         name: 1, 
         adj: 1
    }}
 ])


db.logmessages.aggregate( [ 
    { $project: {
       date: {
          $dateFromString: {
             dateString: '$date'
          }
       }
    }
 }, 
 { $sort: { date : 1} } ] )



 db.getCollection('Event').aggregate([{ "$unwind": "$attendees" },
        { "$lookup" : { "from" : "Contact", "localField" : "attendees.contact", "foreignField": "_id", "as" : "contactlist" } },
        { "$unwind": "$contactlist" },
         { "$project" :{
                    "attendees.type" : 1,
                    "attendees.status" : 1,
                    "attendees.contact" : "$contactlist",
                      "name": 1, "_id": 1
                       }
        },
        {
            "$group" : {
                _id : "$_id" ,
                "name" : { $first : "$name" }, 
                "attendees" : { $push : "$attendees" }
            }
        }
        ]),





        {
            "$lookup": {
                "from": "test750",
                "localField": "Z",
                "foreignField": "Z",
                "as": "750joined"
            }
        },
        {
            "$lookup": {
                "from": "test850", 
                "localField": "X", 
                "foreignField": "X", 
                "as": "850joined"
            }
        }