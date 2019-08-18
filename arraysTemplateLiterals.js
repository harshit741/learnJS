const weaponsJohn = ['Desert Eagle', 'SMG', 'Knife', 'Chain', 'Knuckle'];
console.log(weaponsJohn);
console.log("John's favourite weapon: " + weaponsJohn[0]);
console.log(`Total Weapons John uses is ${weaponsJohn.length}`); //back quote or ` placed
                                                                 //under Esc key is used to inside
                                                                 //console log to print string as
                                                                 //well as script using $ sign and
                                                                 // {}   

 //Shift and unshift - shift deletes the first element in array and unshift add any
 //new element in first place.
 weaponsJohn.shift();
 console.log(weaponsJohn);
 console.log(`New Total Weapons John uses is ${weaponsJohn.length}`); 
 weaponsJohn.unshift('DEagle');
  console.log(weaponsJohn);


  //Pop and Push - Pop deletets the last element from the array and push adds 
  //new element at the end.
  weaponsJohn.pop();
  console.log(weaponsJohn);
  console.log(`New Total Weapons John uses is ${weaponsJohn.length}`);
  weaponsJohn.push('Katana','HMG','Grenade');
  console.log(weaponsJohn); 
  console.log(`New Total Weapons John uses is ${weaponsJohn.length}`);


 //Splice command Adds/Deletes/Replace element at any place in an array, 
 //given you know the index values.
 //Syntax - arrayName.splice(index,0 to add or 1 to delete one element and add or subsequently,Value,next value if any)

 weaponsJohn.splice(2,1,'Grenade','Bomb');
 console.log(weaponsJohn);
 console.log(`New Total Weapons John uses is ${weaponsJohn.length}`);
 