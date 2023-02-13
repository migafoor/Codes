

Review.find()
  .sort({_id: -1})
  .limit(10)
  .then(reviews => {
    console.log(reviews)
  });


  db.Foo.aggregate([
    // Sort all the doc on count, descending
    {$sort: {count: -1}},
    // Take the first n of those
    {$limit: n},
    // Resort those n docs on name
    {$sort: {name: 1}}
])   //.exec(...)


db.Foo
  .find()
  .sort({'count': -1,'name': 1})
  .limit(n)
 // .exec(...);


 const docs = await Character.find({ rank: 'Lieutenant' });
 docs.map(doc => doc.name).sort(); 
 //const docs = await Character.find({ age: { $lt: 29 } });
 const docs1 = await Character.find({ age: { $gte: 29 } });
 const docs2 = await Character.find({ rank: /Commander/ });    // In SQL, you would use the LIKE operator.
 const docs3 = await Character.find({ rank: { $regex: 'Commander' } });   //useful if query in http:

 const docs4 = await Character.find({
    $and: [
      {
        $or: [
          { age: { $gte: 29 } },
          { rank: 'Commander' }
        ]
      },
      {
        $or: [
          { name: { $lte: 'D' } },
          { name: { $gte: 'W' } }
        ]
      }
    ]
  });

  //******************************************* */

  User.findOne({ email: email }, 'name phone');
  User.findOne({ email: email }, '-password');

// find user and return just _id field
User.findOne({ email: email }, {
    projection: { _id: 1 }
  });

// find user and return just _id and name field
User.findOne({ email: email }).select('name');

// find user and return all fields except _id
User.findOne({ email: email }).select({ _id: 0 });

MyModel.find({name: "john"}, 'name age address', function(err, docs) {
    console.log(docs);
});

db.collection.find({'_id': {'$gt': record_id } }).sort({'_id': 1}).limit(n)

await Test.find().sort({ createdAt: -1 }).limit(5);








