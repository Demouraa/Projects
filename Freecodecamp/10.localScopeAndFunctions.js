//example of local scope
function myTest() {
    const loc = "foo";
    console.log(loc);
  }

  myTest();
  console.log(loc);


  //

function myLocalScope() {
    // Only change code below this line
    let myVar = "my Variable";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

