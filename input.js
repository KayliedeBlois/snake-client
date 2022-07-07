// setup interface to handle user input from stdin
let connection;

const handleUserInput = function(key) {
   if (key === 'w') {
    connection.write("Move: up");
  } if (key === 'a') {
    connection.write("Move: left");
  } if (key === 's') {
    connection.write("Move: down");
  } if (key === 'd') {
    connection.write("Move: right");
  } if (key === '\u0003') { // \u0003 makes to ctrl+c input
      process.exit();
  } if (key === "h") {
    connection.write("Say: Hahahahaha");
  } if (key === "y") {
    connection.write("Say: YES!!!");
  } if (key === "n") {
    connection.write("Say: NOOOOOOO!");
  }
};

// Stores the active TCP connection object.


const setupInput = (conn) => {
  connection  = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;