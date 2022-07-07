const net = require("net");

const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect",() => {
    console.log("Successfully connected to gamer server");
  });

  conn.on("connect", () => {
    conn.write("Name: KWD");
  });


  // conn.on("connect", () => {
  //   console.log("Move: up");
  // });

  //TEST = Moves up continually every 50 ms
  // setInterval(() => {
  //   console.log("Move: up");
  // }, 50);

  // TEST = Moves up, right, down, down, left changes every 50 ms
  // conn.on("connect", () => {
  //   let time = 0;
  //   setTimeout(() => {
  //     console.log("Move: up");
  //   }, time)
  //   time += 50;
  // });
  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Move: right");
  //   }, 50);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Move: down");
  //   }, 100);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Move: down");
  //   }, 150);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     console.log("Move: left");
  //   }, 150);
  // });


  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;