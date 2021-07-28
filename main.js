/*
Classic climb generator
- gives the user a suggest classic rock climb suggestion 
- includes info about the climb, including name, type, location and grade

Antonio Keyes
7-28-21
*/

const climbs = {
    climb0: {
        name: 'Flying Monkeys',
        type: 'Sport',
        location: 'Rumney, New Hampshire',
        grade: '5.12c',
        link: 'https://www.mountainproject.com/route/106579917/flying-monkeys'
    },
    climb1: {
        name: 'Lonesome Dove',
        type: 'Sport',
        location: 'Rumney, New Hampshire',
        grade: '5.10a',
        link: 'https://www.mountainproject.com/route/105879126/lonesome-dove'
    }
};


let randomProperty = obj => {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

/*need a "holder" because otherwise I would have to call the randomProperty function multiple times
in the same console.log statement which would give me mismatching values -- I need all 
of the values in the final console.log to come from the same key. 
Creating a randomHolder allows me to call, for example, randomHolder.name and randomHolder.location
in the same console.log, guaranteeing that both of these values will be from the same key.
*/
let randomHolder = randomProperty(climbs);

console.log(`${randomHolder.name}, ${randomHolder.type}, ${randomHolder.location}, 
${randomHolder.grade}, ${randomHolder.link}`);