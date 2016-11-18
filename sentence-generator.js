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
        ban: 1/3
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

    for(let word in words) {
        /* e.g. words = {test: 0.2, hi: 0.8}, word = test, occurrence = 0.2 */
        let occurrence = words[word];
        currentTotalOccurrence = currentTotalOccurrence + occurrence;

        if(choicedujour <= currentTotalOccurrence){
            return(word);
        }
    }
}

module.exports.createSentence = function(markov_chain, woord, aantal) {
    /*Hier hebben we een woord ontvangen en een verzoek om een aantal woorden terug*/
    let antwoord = [];
    antwoord.push(woord);
    for(let i = 0; i < aantal; i++) {
        let laatste_woord = antwoord[antwoord.length - 1];
        let nieuw_woord = chooseWord(markov_chain[laatste_woord]);
        antwoord.push(nieuw_woord);
    }
    antwoord.shift();
    return(antwoord);
};

/* TODO: remove this debug line */
// console.log('Word chosen: ', chooseWord(example_markov_chain['should']))

/* Ik krijg een woord en zoek ?3? opeenvolgende woorden. We gebruiken een for loop die telt tot het aantal gewenste woorden.
Hij moet uiteraard zijn eigen vondsten als input gebruiken.
Voorbeeld van een loopje, gehad van Tom: */
    // for(let i = 0; i < 5; i++) { /* doe iets met i */ }

// console.log("Zinnetje: ", createSentence(example_markov_chain, "should", 2))
