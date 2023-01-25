let count = 0;

function cc(card) {
  // Only change code below this line
  let minus = [10 , 'J', 'Q', 'K', 'A']
  card == 10 || typeof(card) == 'string' ? --count 
  : card < 7 ? ++count 
  : 0 ;

  let retorno = count > 0 ? `Bet` : `Hold`;
  return `${count} ${retorno}`;
  // Only change code above this line
}

cc(10); cc("J"); cc("Q"); cc("K"); cc("A");

console.log(cc("Q"), cc("K"), cc("A"))