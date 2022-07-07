const net = require("net");
// establishes a connection with the game server

const connect = require("./client");
// uses connect function from client.js

const setupInput = require("./input");
// uses setUpInput function from input.js


console.log("Connecting ...");
setupInput(connect());

// setup interface to handle user input from stdin

//setupInput(connect({})); // making it repeat so commented it out

//console.log(setupInput); 