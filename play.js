const net = require("net");
// establishes a connection with the game server

const connect = require("./client");
// uses connect function from client.js


console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const handleUserInput = function () {
  if (key === 'u\0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log(setupInput); 