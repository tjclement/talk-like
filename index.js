/**
 * Created by tom on 19/11/16.
 */

let _ = require('lodash');

let file = './data/trump_tweets.js';
let wordsToGenerate = 30;

let {markovChain, extractWords} = require('./markov_dataset_parser.js');
let {createSentence} = require('./sentence-generator.js');

let lines = require(file);
let words = extractWords(lines);
let chain = markovChain(lines);

let capitalWords = _.filter(words, (word) => {
    return word && _.inRange(word.charCodeAt(0), 65, 91);
});
let startWord = _.sample(capitalWords);
for(let i = 0; i < 10; i++) {
    console.log(startWord, createSentence(chain, startWord, wordsToGenerate).join(' '));
}