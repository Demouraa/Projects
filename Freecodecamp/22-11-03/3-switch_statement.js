function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      console.log("beta");
      break;
    case 3:
      answer = "gamma";
      console.log("gamma");
      break;
    case 4:
      answer = "delta";
      console.log("delta");
      break;
  }
  
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));