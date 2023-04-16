/**
 * 

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

 */


function checkObj(obj, checkProp) {
  // Only change code below this line
  let verify = obj[122].hasOwnProperty(checkProp);
  if(verify === true) {
    return obj[122][checkProp];
  }
  return "Not Found";
  // Only change code above this line
}

let object = {
  122: {
    gift: "pony", pet: "kitten", bed: "sleigh"
  }
};


console.log(checkObj(object, "gift"));