const { PeerServer } = require("peer");
const server = PeerServer({
  port: process.env.PORT || 9000,
  path: "/myapp",
  key: "peerjs",
  allow_discovery: true,
  proxied: true
});
server.on("connection", (client) => {
  console.log("Client connected:", client.getId());
});
server.on("disconnect", (client) => {
  console.log("Client disconnected:", client.getId());
});
console.log("PeerJS server running");
