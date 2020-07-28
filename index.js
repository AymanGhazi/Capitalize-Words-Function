function capitalizeWords(string) {
'use strict';
    var OldArray = string.split(' '), //split != join
        newArray = [];
for(var i=0; i<OldArray.length; i++){
    
  newArray.push(OldArray[i].charAt(0).toUpperCase() + OldArray[i].slice(1)); 
}
    return newArray.join(' ')
}
console.log(capitalizeWords('this is my string hello'));
