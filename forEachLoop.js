const weaponsJohn = ['Desert Eagle', 'SMG', 'Knife', 'Chain', 'Knuckle'];
weaponsJohn.forEach(function(weapon , i){
    console.log('No. ' + (i +1) + ' weapon of John Wick is ' + weapon);
})
//foreach Loop run with array and can take a funtion.
//Function with first parameter will give element of array 
//and second parameter will give index of that element.