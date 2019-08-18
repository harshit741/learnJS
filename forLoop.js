const weaponsJohn = ['Desert Eagle', 'SMG', 'Knife', 'Chain', 'Knuckle'];
console.log('Weapons is priority order for John:');
for (let i = 0; i < weaponsJohn.length; i++) {
    console.log(weaponsJohn[i]);
    
}
console.log('Weapons in least priority order for John:');
for (let i = weaponsJohn.length - 1; i >= 0; i--){
    console.log(weaponsJohn[i]);
}