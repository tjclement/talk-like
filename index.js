/**
 * Created by tom on 19/11/16.
 */

let {markovChain, extractWords} = require('./markov_dataset_parser.js');
let {createSentence} = require('./sentence-generator.js');

let words = extractWords(require('./data/trump_debate_data.js'));
let chain = markovChain(words);

console.log('We', createSentence(chain, 'We', 30).join(' '));