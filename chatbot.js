#!/usr/bin/env node
const readline = require('readline');

const responses = {
  hello: 'Hello! How can I help you?',
  hi: 'Hi there! How can I assist?',
  bye: 'Goodbye!',
  help: 'I am a simple chatbot. Try saying hello.'
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const ask = () => {
  rl.question('You: ', (input) => {
    const key = input.trim().toLowerCase();
    const response = responses[key] || "I'm sorry, I don't understand.";
    console.log(`Bot: ${response}`);
    if (key === 'bye') {
      rl.close();
    } else {
      ask();
    }
  });
};

console.log('Chatbot started. Type "bye" to exit.');
ask();
