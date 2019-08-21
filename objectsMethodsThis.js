let profileData1 = {
    name: 'John Wick',
    work: 'Killer',
    experience: 5 + ' years',        //object declaration
    confirmedKills: 39,
    rageLevel: 'High',
    intro: function(){
        console.log(`${this.name} is good at his work.`);   //'this' keyword is used when we 
                                                            //reference to any element of object
                                                         //inside the object.(more info downside)
    },
}

let profileData2 = {
    name: 'Eathen Hunt',
    work: 'MI6 Agent',
    experience: 10 + ' years',       //object declaration
    confirmedKills: 12,
    rageLevel: 'Low',
    intro: function(){
        console.log(`${this.name} is good at his work.`);   //In this case we reffered to 'name'
                                                            //inside a method using 'this'
                                                            //without 'this', a not defined error
                                                            //will come.
    },
}

let task = function(profile){        //object calling at conditions via function
    console.log(`${profile.name} will work.`)
    console.log(`He is ${profile.work} and has ${profile.experience} of experience.`);
    console.log(`He has ${profile.rageLevel} rage level with ${profile.confirmedKills} kills so far.`)
    profile.intro();

}
let workLegal = true;
if(workLegal == false){             //condition
    return task(profileData1);
} else
    return task(profileData2);
