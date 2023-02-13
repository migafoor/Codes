//check an object exists in the array
var newItem = "NEW_ITEM_TO_ARRAY";
var array = ["OLD_ITEM_1", "OLD_ITEM_2"];

array.indexOf(newItem) === -1 ? array.push(newItem) : console.log("This item already exists");

console.log(array)

//check an object key value pair exists
var arrayObj = [{name:"bull", text: "sour"},
    { name: "tom", text: "tasty" },
    { name: "tom", text: "tasty" }
]
var index = arrayObj.findIndex(x => x.name=="bob"); 
// here you can check specific property for an object whether it exist in your array or not

index === -1 ? arrayObj.push({your_object}) : console.log("object already exists")


//another way   ******************
var item = "Hello World";
var array = [];
if (array.indexOf(item) === -1) array.push(item);

//if object
var item = {name: "tom", text: "tasty"}
var array = [{}]
if (!array.find(o => o.name === 'tom' && o.text === 'tasty'))
    array.push(item)