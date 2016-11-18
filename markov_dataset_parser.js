/**
 * Created by tom on 18/11/16.
 */

let _ = require('lodash');

module.exports.extractWords = function (lines) {
    let totalText = lines.join(' ');

    /* Prepend punctuation characters with spaces, so they count as words in the Markov chain.  */
    totalText = _.replace(totalText, /:/g, ' :');
    totalText = _.replace(totalText, /!/g, ' !');
    totalText = _.replace(totalText, /\?/g, ' ?');
    totalText = _.replace(totalText, /,/g, ' ,');
    totalText = _.replace(totalText, /\./g, ' .');
    totalText = _.replace(totalText, /\. \. \./g, '...');
    totalText = _.replace(totalText, /\. \./g, '..');

    return totalText.split(' ');

};

module.exports.markovChain = function(words) {
    let markov_chain = {};

    /* TODO: determine whether we want case insensitivity for words */

    /* Count all next word occurrences for each individual word in the words list. */
    for(let index = 0; index < words.length; index++) {
        let word = words[index];
        if(!markov_chain[word]) { markov_chain[word] = {} }

        let nextWord = index < words.length - 1 ? words[index + 1] : null;
        if(nextWord) {
            markov_chain[word][nextWord] = (markov_chain[word][nextWord] || 0) + 1;
        }
    }

    /* Normalize occurrences into rational values, relative to the other occurrences for each word. */
    for(let word of words) {
        let chain = markov_chain[word];
        let totalOccurrences = _.reduce(chain, (accumulator, value, key) => { return accumulator + value; }, 0);
        for(let occurence in chain) {
            chain[occurence] /= totalOccurrences;
        }
    }

    return markov_chain;
};