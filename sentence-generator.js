/**
 * Created by Janssens on 18-11-2016.
 */

let example_markov_chain = {
    we: {
        should: 1.0
    },
    should: {
        build: 1/3,
        make: 1/3,
        ban: 13
    },
    build: {
        a: 1.0
    },
    make: {
        a: 1.0
    },
    ban: {
        all: 1.0
    },
    a: {
        wall: 0.5,
        ton: 0.5
    },
    all: {
        foreigners: 1.0
    }
};


function chooseWord(words){
    let currentTotalOccurrence = 0;
    let choicedujour = Math.random();
    // console.log("choicedujour", choicedujour);
    /* TODO: generate random number 0 <= x < 1 */

    for(let word in words) {
        /* e.g. words = {test: 0.2, hi: 0.8}, word = test, occurrence = 0.2 */
        let occurrence = words[word];
        /* TODO: add occurrence to currentTotalOccurrence */
        currentTotalOccurrence = currentTotalOccurrence + occurrence;
        let x = 0;
        /* TODO: compare if random number <= currentTotalOccurrence, and return word if so */

    }
}

/* TODO: remove this debug line */
console.log('Word chosen: ', chooseWord(example_markov_chain['we']));