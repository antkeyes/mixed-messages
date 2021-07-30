/*
Classic climb generator
- gives the user a suggest classic rock climb suggestion 
- includes info about the climb, including name, type, location and grade

Antonio Keyes
7-28-21
*/

//test edit

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
    climb15: {
        name: 'Myopia',
        type: 'Trad',
        location: 'Sawtooth Ridge, Idaho',
        grade: '5.11a',
        link: 'https://www.mountainproject.com/route/105996539/myopia'
    },
    climb16: {
        name: 'Model Worker',
        type: 'Trad',
        location: 'Lower Town Hall, Washington',
        grade: '5.11c',
        link: 'https://www.mountainproject.com/route/105814991/model-worker'
    },
    climb17: {
        name: 'Slow Children',
        type: 'Trad',
        location: 'Lower Town Hall, Washington',
        grade: '5.10d',
        link: 'https://www.mountainproject.com/route/105815743/slow-children'
    },
    climb18: {
        name: 'Japanese Gardens',
        type: 'Trad',
        location: 'Lower Town Hall, Washington',
        grade: '5.11+',
        link: 'https://www.mountainproject.com/route/105791008/japanese-gardens'
    },
    climb14: {
        name: 'Whipper Snapper',
        type: 'Sport',
        location: 'Clear Creek, Tennessee',
        grade: '5.11a',
        link: 'https://www.mountainproject.com/route/106753704/whipper-snapper'
    },
    climb19: {
        name: 'Tieranny',
        type: 'Sport',
        location: 'Clear Creek, Tennessee',
        grade: '5.12a',
        link: 'https://www.mountainproject.com/route/105891980/tieranny'
    },
    climb20: {
        name: 'Saddam Hussein',
        type: 'Sport',
        location: 'Clear Creek, Tennessee',
        grade: '5.11b/c',
        link: 'https://www.mountainproject.com/route/106090481/saddam-hussein'
    },
    climb21: {
        name: 'Golden Shower',
        type: 'Boulder',
        location: 'Rocktown, Georgia',
        grade: 'V5',
        link: 'https://www.mountainproject.com/route/106403724/golden-shower'
    },
    climb22: {
        name: 'Standard Deviation',
        type: 'Boulder',
        location: 'Rocktown, Georgia',
        grade: 'V6',
        link: 'https://www.mountainproject.com/route/108054353/standard-deviation'
    },
    climb23: {
        name: 'Nose Candy',
        type: 'Boulder',
        location: 'Rocktown, Georgia',
        grade: 'V6',
        link: 'https://www.mountainproject.com/route/106340625/nose-candy'
    },
    climb24: {
        name: 'Electra',
        type: 'Sport',
        location: 'Piedmont, North Carolina',
        grade: '5.10C',
        link: 'https://www.mountainproject.com/route/106101380/electra'
    },
    climb25: {
        name: 'Caterpillar',
        type: 'Trad',
        location: 'Piedmont, North Carolina',
        grade: '5.7+',
        link: 'https://www.mountainproject.com/route/106101415/caterpillar'
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
