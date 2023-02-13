[
    {
      $unwind: "$books"
    },
    {
      $match: {
        "books.pages": {
          $gt: 21
        }
      }
    },
    {
      $sort: {
        "books.released": 1
      }
    },
    {
      $group: {
        _id: null,
        "books": {
          $push: "$books"
        }
      }
    }
  ]


  // aggregate sor subdocument
  db.servers.aggregate(
    {$unwind: '$service.apps.updates'}, 
    {$sort: {'service.apps.updates.date': 1}}, 
    {$group: {_id: '$_id', 'updates': {$push: '$service.apps.updates'}}}, 
    {$project: {'service.apps.updates': '$updates'}})



    // using $sortArray
    db.collection.aggregate([
        { $set: {
          "service.apps.updates": {
            $sortArray: {
              input: "$service.apps.updates",
              sortBy: { date: 1 }
            }
          }
        }}
      ])

      // using $function

      db.collection.aggregate(
        { $set: {
          { "service.apps.updates":
            { $function: {
                body: function(updates) {
                  updates.sort((a, b) => a.date - b.date);
                  return updates;
                },
                args: ["$service.apps.updates"],
                lang: "js"
            }}
          },
        }
    }
      )

