/*
Classic climb generator
- gives the user a suggest classic rock climb suggestion 
- includes info about the climb, including name, type, location and grade

Antonio Keyes
7-28-21
*/

const climbs = {
    climb1: {
        name: 'Flying Monkeys',
        type: 'Sport',
        location: 'Rumney, New Hampshire',
        grade: '5.12c',
        link: 'https://www.mountainproject.com/route/106579917/flying-monkeys'
    },
    climb2: {
        name: 'Lonesome Dove',
        type: 'Sport',
        location: 'Rumney, New Hampshire',
        grade: '5.10a',
        link: 'https://www.mountainproject.com/route/105879126/lonesome-dove'
    },
    climb3: {
        name: 'Predator',
        type: 'Sport',
        location: 'Rumney, New Hampshire',
        grade: '5.13b',
        link: 'https://www.mountainproject.com/route/105884551/predator'
    },
    climb4: {
        name: 'Stone Staircase',
        type: 'Sport',
        location: 'Bolton Vermont',
        grade: '5.9',
        link: 'https://www.mountainproject.com/route/107560554/stone-staircase'
    },
    climb5: {
        name: 'The Awesomest',
        type: 'Sport',
        location: 'Bolton, Vermont',
        grade: '5.11d',
        link: 'https://www.mountainproject.com/route/116540825/the-awesomest'
    },
    climb6: {
        name: 'The Thorn',
        type: 'Trad',
        location: 'Bolton, Vermont',
        grade: '5.11a',
        link: 'https://www.mountainproject.com/route/107018409/the-thorn'
    },
    climb7: {
        name: 'Jenga',
        type: 'Sport',
        location: 'Birdsboro Quarry, Pennsylvania',
        grade: '5.10a',
        link: 'https://www.mountainproject.com/route/106540876/jenga'
    },
    climb8: {
        name: 'Gym Dandy',
        type: 'Sport',
        location: 'Birdsboro Quarry, Pennsylvania',
        grade: '5.11a',
        link: 'https://www.mountainproject.com/route/106931130/gym-dandy'
    },
    climb9: {
        name: 'Laid Back and Well Hung',
        type: 'Sport',
        location: 'Birdsboro Quarry, Pennsylvania',
        grade: '5.11c',
        link: 'https://www.mountainproject.com/route/106381287/laid-back-and-well-hung'
    },
    climb10: {
        name: 'Dreamin\'',
        type: 'Sport',
        location: 'Smith Rock, Oregon',
        grade: '5.12a',
        link: 'https://www.mountainproject.com/route/105792268/dreamin'
    },
    climb11: {
        name: 'Chain Reaction',
        type: 'Sport',
        location: 'Smith Rock, Oregon',
        grade: '5.12c',
        link: 'https://www.mountainproject.com/route/105789917/chain-reaction'
    },
    climb12: {
        name: 'To Bolt or Not to Be',
        type: 'Sport',
        location: 'Smith Rock, Oregon',
        grade: '5.14a',
        link: 'https://www.mountainproject.com/route/105880873/to-bolt-or-not-to-be'
    },
    climb13: {
        name: 'Astro Elephant',
        type: 'Trad',
        location: 'Sawtooth Range, Idaho',
        grade: '5.10',
        link: 'https://www.mountainproject.com/route/105996567/astro-elephant'
    },
    climb14: {
        name: 'Direct Beckey',
        type: 'Trad',
        location: 'Sawtooth Range, Idaho',
        grade: '5.11b',
        link: 'https://www.mountainproject.com/route/105996498/direct-beckey'
    },

};

// function to pick random key from "climbs" object
let randomProperty = obj => {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

/*need a "holder" because otherwise I would have to call the randomProperty function multiple times in the same console.log statement which would give me mismatching values -- I need all of the values in the final console.log to come from the same key. Creating a randomHolder allows me to call, for example, randomHolder.name and randomHolder.location in the same console.log, guaranteeing that both of these values will be from the same key.
*/
let randomHolder = randomProperty(climbs);


console.log(`\nLooking for a classic ${randomHolder.type} climb? If you're ever in ${randomHolder.location}, try out \'${randomHolder.name}\', it's graded ${randomHolder.grade}. For more information check out ${randomHolder.link}. Happy climbing!\n`);
