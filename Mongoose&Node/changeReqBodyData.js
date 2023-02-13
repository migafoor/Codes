

//instead of adding req.body directly derive data from req.body and save
//to secure from client side data manipulations...

function safeCopy(srcObj, props, destObj = {}) {
    for (let prop of props) {
        if (srcObj.hasOwnProperty(prop)) {
            destObj[prop] = srcObj[prop];
        }
    }
    return destObj;
}

// sample req.body that has unplanned properties on it
const req = {body: {
    fname: "Jack",
    lname: "Bundy",
    age: 31,
    girlfriend: "Alice",    // undesired property
    salary: 1000000         // undesired property
}};

// make copy that only has desired properties
let newObj = safeCopy(req.body, ["fname", "lname", "age"]);
// see new object with only the desired properties
console.log(newObj);