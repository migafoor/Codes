SiteData.aggregate([
    {
        $match: {} // add your search here
    },
    {
        $project: { // add all the fields you need from the collection, if you need to omit something from the query results, just don't mention it here
            menuName: 1,
            title: 1,
            excerpt:1,
            location:1,
            url:1,
            date: { $dateToString: { format: "%d/%m/%Y", date: "$date" } } // this will return the date in the format "dd/MM/yyyy"
        }
    },
    { $sort: { date : 1} } ,
    //{$unwind:'$images'},
    { $unwind: { path: '$products' } },
    {
        $lookup: {    // this is the alternative to the populate
            from: 'datafiles',
            localField: 'images.',
            foreignField: '_id',
            'pipeline': [
                 {'$sort': {  '_id': -1 }
              }, {
                '$limit': 1
              },
            ],
            as: 'images'
        }
    }
])