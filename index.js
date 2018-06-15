<<<<<<< HEAD
function theBeatlesPlay(musicians, instruments) {
  var mtArray = [];
  for (var i = 0; i < musicians.length; i++) {
    mtArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return mtArray;
}

function johnLennonFacts(array) {
  var facts = [];
  while (facts.length < array.length) {
    facts.push(array[facts.length] + '!!!');
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var mtArray = [];
  do {
    mtArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return mtArray;
}
=======
function theBeatlesPlay(musicians, instruments) {
 var mtArray = []; 
 for (var i = 0; i < musicians.length; i++) {
  mtArray.push(musicians[i] + " plays " + instruments[i]);
}
return mtArray;
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0;
  while (facts < array.length) {
    facts.push(array[i] + '!!!')
    i++;
  }
  return facts;
}
>>>>>>> 417d88e036f395d8ff86f72e3b451c41a806a9e4
