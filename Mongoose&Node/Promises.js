Promise.all([
    User.find({ _id: req.body.userId }),
    User.find({ username: decodedUser.username})
  ]).then( ([ user, member ]) => {
    console.log( util.format( "user=%O member=%O", user, member ) );
  });

  //*****************************/
  var promises = [
    aircraftModel.findOne({_id: tailNumber}).exec(),
    faaAircraftModel.findOne({_id: tailNumber.substring(1)}).exec()
  ];
  
  Promise.all(promises).then(function(results) {
      console.log(results);
  }).catch(function(err){
      console.log(err);
  });

  //**************************************** */
  let promise = new Promise(function(resolve, reject){
    //do something
});

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

//**************************************** */
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

//***********************************************8 */






